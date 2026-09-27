import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function PlantGrowBagScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 30);
    camera.position.set(0, 2.2, 6.4);
    camera.lookAt(0, 1.05, 0);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    scene.add(new THREE.HemisphereLight(0xd9ffe7, 0x14291d, 2.2));

    const keyLight = new THREE.DirectionalLight(0xf1ffe9, 3.2);
    keyLight.position.set(-3, 5, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(512, 512);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0x42db91, 18, 8);
    fillLight.position.set(3, 2.5, -2);
    scene.add(fillLight);

    const model = new THREE.Group();
    scene.add(model);
    const plant = new THREE.Group();
    plant.position.y = 0.37;
    model.add(plant);
    const plantGrowth = new THREE.Group();
    plantGrowth.scale.setScalar(0.78);
    plant.add(plantGrowth);

    const swayingLeaves: { group: THREE.Group; baseAngle: number; phase: number }[] = [];

    const bagMaterial = new THREE.MeshStandardMaterial({
      color: 0x244938,
      roughness: 0.92,
      metalness: 0.02,
      side: THREE.DoubleSide,
    });
    const bag = new THREE.Mesh(new THREE.CylinderGeometry(0.78, 0.62, 0.78, 48, 1, true), bagMaterial);
    bag.position.y = 0;
    model.add(bag);

    const soil = new THREE.Mesh(
      new THREE.CylinderGeometry(0.765, 0.765, 0.075, 48),
      new THREE.MeshStandardMaterial({ color: 0x39291e, roughness: 1 })
    );
    soil.position.y = 0.36;
    model.add(soil);

    const base = new THREE.Mesh(
      new THREE.CylinderGeometry(0.63, 0.63, 0.045, 48),
      new THREE.MeshStandardMaterial({ color: 0x183426, roughness: 1 })
    );
    base.position.y = -0.39;
    model.add(base);

    const rimMaterial = new THREE.MeshStandardMaterial({ color: 0x719b69, roughness: 0.85 });
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.78, 0.055, 10, 48), rimMaterial);
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 0.39;
    model.add(rim);

    const seamMaterial = new THREE.MeshStandardMaterial({ color: 0x527458, roughness: 0.9 });
    for (const radius of [0.72, 0.69, 0.66]) {
      const seam = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.008, 5, 48), seamMaterial);
      seam.rotation.x = Math.PI / 2;
      seam.position.y = -0.22 + (0.72 - radius) * 1.5;
      model.add(seam);
    }

    const groundShadow = new THREE.Mesh(
      new THREE.CircleGeometry(0.9, 40),
      new THREE.MeshBasicMaterial({ color: 0x06150d, transparent: true, opacity: 0.38 })
    );
    groundShadow.rotation.x = -Math.PI / 2;
    groundShadow.position.y = -0.42;
    groundShadow.scale.set(1, 0.48, 1);
    model.add(groundShadow);

    const stemCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(-0.025, 0.45, 0),
      new THREE.Vector3(0.035, 0.9, 0),
      new THREE.Vector3(0.02, 1.35, 0),
      new THREE.Vector3(0.08, 1.82, 0),
      new THREE.Vector3(0.06, 2.08, 0),
    ]);
    const stem = new THREE.Mesh(
      new THREE.TubeGeometry(stemCurve, 28, 0.027, 8, false),
      new THREE.MeshStandardMaterial({ color: 0x6dbb61, roughness: 0.78 })
    );
    plantGrowth.add(stem);

    const leafShape = new THREE.Shape();
    leafShape.moveTo(0, 0);
    leafShape.bezierCurveTo(0.14, 0.2, 0.46, 0.22, 0.62, 0.37);
    leafShape.bezierCurveTo(0.4, 0.4, 0.14, 0.27, 0, 0);
    const leafGeometry = new THREE.ExtrudeGeometry(leafShape, {
      depth: 0.018,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.018,
      bevelThickness: 0.012,
      curveSegments: 16,
    });
    const veinCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.02, 0.025, 0.009),
      new THREE.Vector3(0.2, 0.12, 0.009),
      new THREE.Vector3(0.4, 0.23, 0.009),
      new THREE.Vector3(0.56, 0.35, 0.009),
    ]);
    const veinGeometry = new THREE.TubeGeometry(veinCurve, 12, 0.006, 5, false);
    const leafMaterials = [
      new THREE.MeshStandardMaterial({ color: 0x42c96a, roughness: 0.62, side: THREE.DoubleSide }),
      new THREE.MeshStandardMaterial({ color: 0x79df69, roughness: 0.62, side: THREE.DoubleSide }),
      new THREE.MeshStandardMaterial({ color: 0x28a957, roughness: 0.62, side: THREE.DoubleSide }),
    ];
    const veinMaterial = new THREE.MeshStandardMaterial({ color: 0xb6ef8c, roughness: 0.68 });
    const leafNodes = [
      { height: 0.48, angle: 2.55, yaw: 0.15, scale: 0.88 },
      { height: 0.82, angle: 0.38, yaw: 2.25, scale: 1.02 },
      { height: 1.18, angle: 2.6, yaw: 0.9, scale: 0.96 },
      { height: 1.5, angle: 0.35, yaw: 2.8, scale: 0.92 },
    ];

    for (const [index, node] of leafNodes.entries()) {
      const leaf = new THREE.Group();
      leaf.position.set(node.height < 1 ? -0.02 : 0.02, node.height, 0);
      leaf.rotation.set(0, node.yaw, node.angle);
      leaf.scale.setScalar(node.scale);

      const blade = new THREE.Mesh(leafGeometry, leafMaterials[index % leafMaterials.length]);
      const vein = new THREE.Mesh(veinGeometry, veinMaterial);
      leaf.add(blade, vein);
      plantGrowth.add(leaf);
      swayingLeaves.push({ group: leaf, baseAngle: node.angle, phase: index * 1.7 });
    }

    const flower = new THREE.Group();
    flower.position.set(0.06, 2.08, 0);
    plantGrowth.add(flower);

    const petalShape = new THREE.Shape();
    petalShape.moveTo(-0.075, 0.12);
    petalShape.bezierCurveTo(-0.12, 0.28, -0.09, 0.48, 0, 0.57);
    petalShape.bezierCurveTo(0.09, 0.48, 0.12, 0.28, 0.075, 0.12);
    petalShape.quadraticCurveTo(0, 0.075, -0.075, 0.12);
    const petalGeometry = new THREE.ExtrudeGeometry(petalShape, {
      depth: 0.035,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.025,
      bevelThickness: 0.018,
      curveSegments: 16,
    });
    const petalMaterial = new THREE.MeshStandardMaterial({
      color: 0xffc928,
      roughness: 0.48,
      side: THREE.DoubleSide,
      emissive: 0x704000,
      emissiveIntensity: 0.08,
    });

    for (let layer = 0; layer < 2; layer++) {
      const petalCount = layer === 0 ? 20 : 18;
      for (let index = 0; index < petalCount; index++) {
        const angle = (index / petalCount) * Math.PI * 2 + layer * 0.14;
        const petal = new THREE.Mesh(petalGeometry, petalMaterial);
        petal.rotation.z = -angle;
        petal.rotation.x = (index % 2 ? 1 : -1) * 0.08;
        petal.position.set(0, 0, layer === 0 ? 0.015 : -0.025);
        petal.scale.setScalar(layer === 0 ? 1 : 0.88);
        flower.add(petal);
      }
    }

    const flowerCenter = new THREE.Mesh(
      new THREE.CylinderGeometry(0.255, 0.22, 0.14, 48, 1),
      new THREE.MeshStandardMaterial({ color: 0x513019, roughness: 0.96 })
    );
    flowerCenter.rotation.x = Math.PI / 2;
    flowerCenter.position.z = 0.055;
    flower.add(flowerCenter);

    const seedMaterial = new THREE.MeshStandardMaterial({ color: 0xd89c3c, roughness: 0.8 });
    const seedGeometry = new THREE.SphereGeometry(0.013, 7, 6);
    const seedCount = 100;
    const seeds = new THREE.InstancedMesh(seedGeometry, seedMaterial, seedCount);
    const seed = new THREE.Object3D();
    let seedIndex = 0;
    for (let ring = 0; ring < 6; ring++) {
      const count = ring === 0 ? 6 : 12 + ring * 2;
      const radius = 0.035 + ring * 0.035;
      for (let index = 0; index < count && seedIndex < seedCount; index++) {
        const angle = (index / count) * Math.PI * 2 + ring * 0.35;
        seed.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0.13);
        seed.scale.setScalar(0.72 + ((index + ring) % 3) * 0.2);
        seed.updateMatrix();
        seeds.setMatrixAt(seedIndex++, seed.matrix);
      }
    }
    seeds.count = seedIndex;
    flower.add(seeds);

    const centerRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.258, 0.018, 8, 48),
      new THREE.MeshStandardMaterial({ color: 0x9a6728, roughness: 0.72 })
    );
    centerRing.position.z = 0.11;
    flower.add(centerRing);

    const eyeMaterial = new THREE.MeshStandardMaterial({ color: 0x21180f, roughness: 0.48 });
    const eyeGeometry = new THREE.SphereGeometry(0.023, 12, 10);
    for (const x of [-0.078, 0.078]) {
      const eye = new THREE.Mesh(eyeGeometry, eyeMaterial);
      eye.position.set(x, 0.035, 0.16);
      flower.add(eye);

      const glint = new THREE.Mesh(
        new THREE.SphereGeometry(0.007, 8, 6),
        new THREE.MeshBasicMaterial({ color: 0xfff1ce })
      );
      glint.position.set(x - 0.006, 0.043, 0.18);
      flower.add(glint);
    }

    const cheekMaterial = new THREE.MeshBasicMaterial({ color: 0xef9876 });
    for (const x of [-0.15, 0.15]) {
      const cheek = new THREE.Mesh(new THREE.SphereGeometry(0.022, 10, 8), cheekMaterial);
      cheek.scale.set(1.3, 0.75, 0.45);
      cheek.position.set(x, -0.035, 0.16);
      flower.add(cheek);
    }

    const smileCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.052, -0.045, 0.165),
      new THREE.Vector3(-0.03, -0.07, 0.17),
      new THREE.Vector3(0, -0.078, 0.172),
      new THREE.Vector3(0.03, -0.07, 0.17),
      new THREE.Vector3(0.052, -0.045, 0.165),
    ]);
    const smile = new THREE.Mesh(
      new THREE.TubeGeometry(smileCurve, 16, 0.008, 6, false),
      eyeMaterial
    );
    flower.add(smile);

    const resize = () => {
      const { width, height } = host.getBoundingClientRect();
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    resize();

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const clock = new THREE.Clock();
    let frame = 0;
    const animate = () => {
      frame = window.requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.05);
      if (!reducedMotion.matches) {
        const elapsed = clock.elapsedTime;
        model.rotation.y += delta * 0.32;
        plant.rotation.z = Math.sin(elapsed * 1.15) * 0.035;
        flower.rotation.z = Math.sin(elapsed * 1.15 - 0.4) * 0.025;
        for (const leaf of swayingLeaves) {
          leaf.group.rotation.z = leaf.baseAngle + Math.sin(elapsed * 1.5 + leaf.phase) * 0.055;
        }
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      model.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div className="mb-4 h-44 overflow-hidden rounded-xl border border-emerald-300/20 bg-[radial-gradient(ellipse_at_50%_65%,rgba(21,91,51,0.38),rgba(2,25,14,0.72)_72%)] sm:h-48">
      <canvas ref={canvasRef} aria-label="A rotating 3D sunflower growing in a fabric grow bag" className="h-full w-full" />
    </div>
  );
}