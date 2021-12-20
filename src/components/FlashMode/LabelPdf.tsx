import { jsPDF } from 'jspdf';

export default function LabelPdf(src: string) {
  // eslint-disable-next-line new-cap
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: [32, 57],
  });
  doc.addImage(src, 'PNG', 5, 5, 10, 10);
  doc.save('a4.pdf');
};

