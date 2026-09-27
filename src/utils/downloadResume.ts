import { education, experience, iotProjects, profile, skills } from '@/content/portfolio';

const normalizeText = (text: string) =>
  text.replace(/[\u2013\u2014]/g, '-').replace(/\u2019/g, "'").replace(/\u00b7/g, '|');

export async function downloadResume() {
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF({ format: 'a4', unit: 'pt' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 48;
  const contentWidth = pageWidth - margin * 2;
  let y = 0;

  const addContinuationHeader = () => {
    doc.addPage();
    doc.setFillColor(12, 20, 32);
    doc.rect(0, 0, pageWidth, 38, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(255, 255, 255);
    doc.text(`${profile.name} | RESUME`, margin, 24);
    y = 60;
  };

  const ensureSpace = (height: number) => {
    if (y + height > pageHeight - 48) addContinuationHeader();
  };

  const addHeading = (heading: string) => {
    ensureSpace(30);
    y += 4;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(8, 145, 178);
    doc.text(heading.toUpperCase(), margin, y);
    y += 8;
    doc.setDrawColor(210, 220, 228);
    doc.line(margin, y, pageWidth - margin, y);
    y += 16;
  };

  const addParagraph = (
    text: string,
    options: { fontSize?: number; bold?: boolean; color?: [number, number, number]; indent?: number } = {}
  ) => {
    const fontSize = options.fontSize ?? 9.5;
    const lineHeight = fontSize * 1.45;
    const indent = options.indent ?? 0;
    const setTextStyle = () => {
      doc.setFont('helvetica', options.bold ? 'bold' : 'normal');
      doc.setFontSize(fontSize);
      doc.setTextColor(...(options.color ?? [45, 55, 65]));
    };

    setTextStyle();
    const lines = doc.splitTextToSize(normalizeText(text), contentWidth - indent);
    ensureSpace(lines.length * lineHeight + 3);
    setTextStyle();
    doc.text(lines, margin + indent, y);
    y += lines.length * lineHeight + 3;
  };

  doc.setFillColor(12, 20, 32);
  doc.rect(0, 0, pageWidth, 142, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(27);
  doc.setTextColor(255, 255, 255);
  doc.text(profile.name, margin, 48);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(13);
  doc.setTextColor(103, 232, 249);
  doc.text(profile.title, margin, 71);
  doc.setFontSize(9);
  doc.setTextColor(220, 230, 238);
  doc.text(`${profile.location} | ${profile.experience}`, margin, 94);
  doc.text(profile.email, margin, 112);
  doc.text(profile.linkedin, margin, 128);
  y = 166;

  addHeading('Professional Summary');
  addParagraph(
    'Full stack software engineer with 9+ years of experience developing web and mobile applications, backend services, and APIs. Experienced across React, React Native, Angular, Ionic, Node.js, Express, and PHP, with additional work in application integrations, maintenance, testing, and legacy modernization.'
  );

  addHeading('Professional Experience');
  for (const job of experience) {
    ensureSpace(42);
    addParagraph(`${job.company} | ${job.location}`, { fontSize: 10.5, bold: true, color: [25, 35, 45] });
    addParagraph(`${job.role} | ${normalizeText(job.duration)}`, { fontSize: 9, color: [75, 85, 95] });
    for (const responsibility of job.responsibilities.slice(0, 4)) {
      addParagraph(`- ${responsibility}`, { fontSize: 9, indent: 10 });
    }
    if (job.company === 'Logical Wings Infoweb Private Limited') {
      const companyHobbyProjects = iotProjects
        .filter((project) => project.context === 'Logical Wings hobby project')
        .map((project) => project.name);
      addParagraph(`Worked on these hobby projects under Logical Wings: ${companyHobbyProjects.join('; ')}`, {
        fontSize: 8.8,
        indent: 10,
      });
    }
    y += 7;
  }

  addContinuationHeader();
  addHeading('Personal Projects');
  addParagraph('Hobby projects worked on under Logical Wings', {
    fontSize: 10,
    bold: true,
    color: [25, 35, 45],
  });
  for (const project of iotProjects.filter((item) => item.context === 'Logical Wings hobby project')) {
    addParagraph(project.name, { fontSize: 10, bold: true, color: [25, 35, 45] });
    addParagraph(project.description, { fontSize: 9 });
    addParagraph(`Technologies: ${project.technologies.slice(0, 5).join(', ')}`, { fontSize: 8.5, color: [75, 85, 95] });
    y += 4;
  }

  addParagraph('Personal projects', { fontSize: 10, bold: true, color: [25, 35, 45] });
  for (const project of iotProjects.filter((item) => item.context === 'Personal project')) {
    addParagraph(project.name, { fontSize: 10, bold: true, color: [25, 35, 45] });
    addParagraph(project.description, { fontSize: 9 });
    addParagraph(`Technologies: ${project.technologies.slice(0, 5).join(', ')}`, { fontSize: 8.5, color: [75, 85, 95] });
    y += 4;
  }

  addParagraph('Hobbies: 3D printing, hardware prototyping, electronics, and robotics.', { fontSize: 9 });

  addHeading('Technical Skills');
  for (const category of skills) {
    addParagraph(`${category.category}: ${category.items.join(', ')}`, { fontSize: 8.8 });
  }

  addHeading('Education');
  for (const item of education) {
    addParagraph(`${item.degree} | ${item.institution} | ${item.year}`, { fontSize: 9.2 });
  }

  const pageCount = doc.getNumberOfPages();
  for (let page = 1; page <= pageCount; page++) {
    doc.setPage(page);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(120, 130, 140);
    doc.text(`${profile.name} | ${page} / ${pageCount}`, pageWidth - margin, pageHeight - 22, { align: 'right' });
  }

  doc.save('Kamlesh-Parmar-Resume.pdf');
}