import { jsPDF } from 'jspdf';

export default function LabelSimplePdf(src: string, word: string) {
  // eslint-disable-next-line new-cap
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: [32, 57],
  });
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(5);
  doc.text([`${word}`], 5, 5);
  doc.setLineWidth(1.5);
  doc.addImage(src, 'PNG', 23, 10, 10, 10);
  doc.save(`${word}.pdf`);
}
