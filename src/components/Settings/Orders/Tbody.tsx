/* eslint-disable react/no-array-index-key */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable radix */
interface TbodyProps {
  listOfOrders: any[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchText: string;
  filterTarget: string;
  selectLine: (
    id: number,
    reference: string,
    customRef: string,
    quantity: number,
    deliveryQuantity: number,
    dateNeed: string,
    numeroCde: string
  ) => void;
}

const Tbody: React.FC<TbodyProps> = ({
  listOfOrders,
  searchText,
  filterTarget,
  selectLine,
}) => {
  const handleCheckBox = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      document.getElementById(`${e.target.value}`)?.classList.add('checked');
      const searchLine = listOfOrders.find(
        (list) => list.id === parseInt(e.target.value)
      );
      selectLine(
        searchLine.id,
        searchLine.reference,
        searchLine.customRef,
        searchLine.quantity,
        searchLine.deliveryQuantity,
        new Date(searchLine.dateNeed).toLocaleDateString('fr-FR'),
        searchLine.numeroCde
      );
    }
    if (!e.target.checked) {
      document.getElementById(`${e.target.value}`)?.classList.remove('checked');
      selectLine(parseInt(''), '', '', parseInt(''), parseInt(''), '', '');
    }
  };
  let newList = listOfOrders.filter((list) => {
    if (filterTarget === '1') {
      return list.reference.toLowerCase().includes(searchText);
    }
    if (filterTarget === '2') {
      return list.customRef.toLowerCase().includes(searchText);
    }
    if (filterTarget === '3') {
      return list.quantity >= parseInt(searchText);
    }
    if (filterTarget === '4') {
      return list.deliveryQuantity === parseInt(searchText);
    }
    if (filterTarget === '5') {
      return new Date(list.dateNeed).toLocaleDateString('fr-FR').toLowerCase().includes(searchText);
    }
    if (filterTarget === '6') {
      return list.numeroCde.toLowerCase().includes(searchText);
    }
    return true;
  });
  if (newList.length === 0) {
    newList = listOfOrders;
  }
  return (
    <tbody>
      {newList.map((list, i) => (
        <tr key={i} id={list.id}>
          <td>{list.id}</td>
          <td>{list.reference}</td>
          <td>{list.customRef}</td>
          <td>{list.quantity}</td>
          <td>{list.deliveryQuantity}</td>
          <td>{new Date(list.dateNeed).toLocaleDateString('fr-FR')}</td>
          <td>{list.numeroCde}</td>
          <td>
            <input value={list.id} onChange={handleCheckBox} type="checkbox" />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Tbody;
