import { jsPDF } from 'jspdf';

export default function LabelPdf(src: string, ref: string, manitouRef: string) {
  // eslint-disable-next-line new-cap
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: [32, 57],
  });
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text([`${ref}`], 20, 5);
  doc.setLineWidth(1.5);
  doc.addImage(src, 'PNG', 23, 10, 10, 10);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text([`${manitouRef}`], 20, 25);
  doc.save('a4.pdf');

}
