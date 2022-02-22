/* eslint-disable prettier/prettier */
/* eslint-disable new-cap */
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

export default function PdfAI(title: string, list: any[]) {
  const doc = new jsPDF('l', 'mm', [297, 210]);
  const now = new Date().toDateString();
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text(`imprimé le ${now}`, 200, 10);
  doc.setFontSize(16);
  doc.text([`${title}`], 125, 35);
  doc.autoTable({
    tableWidth: 200,
    startY: 60,
    margin: { left: 50 },
    head: [
      [
        { content: 'id', styles: { cellWidth: 20 } },
        { content: 'Référence HQ', styles: { cellWidth: 40 } },
        { content: 'Numéro AI', styles: { cellWidth: 50 } },
        { content: 'Référence Manitou', styles: { cellWidth: 30 } },
        { content: 'Date Flash', styles: { cellWidth: 30 } },
        { content: 'Numéro Palette', styles: { cellWidth: 30 } }
      ],
    ],
  });
  list.map((ref) =>
    doc.autoTable({
      tableWidth: 200,
      margin: { left: 50 },
      body: [
        [
          { content: `${ref.id}`, styles: { cellWidth: 20 } },
          { content: `${ref.referenceHq}`, styles: { cellWidth: 40 } },
          { content: `${ref.ai}`, styles: { cellWidth: 50 } },
          { content: `${ref.refManitou}`, styles: { cellWidth: 30 } },
          { content: `${new Date(ref.dateFlash).toLocaleDateString('fr-FR')}`, styles: { cellWidth: 30 } },
          { content: `${ref.paletNumber}`, styles: { cellWidth: 30 } }
        ],
      ],
    })
  );
  doc.save('marecherche.pdf');
}
