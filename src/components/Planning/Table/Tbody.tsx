/* eslint-disable react/no-array-index-key */
/* eslint-disable radix */
interface TbodyProps {
  listDelivery: any[];
  saveIdDelivery: (id: number) => void;
  onChange: () => void;
}

const Tbody: React.FC<TbodyProps> = ({ listDelivery, saveIdDelivery }) => {
  const newList = listDelivery.filter(
    (list) => list.deliveryQuantity < list.quantity
  );
  const handleCheckBox = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      document.getElementById(`${e.target.value}`)?.classList.add('checked');
      document.querySelector<HTMLElement>('.flash')!.style.display = 'flex';
      saveIdDelivery(parseInt(e.target.value));
    }
    if (!e.target.checked) {
      document.getElementById(`${e.target.value}`)?.classList.remove('checked');
      document.querySelector<HTMLElement>('.flash')!.style.display = 'none';
      saveIdDelivery(0);
    }
  };
  return (
    <tbody>
      {newList.map((name, i) => (
        <tr key={i} id={name.id}>
          <td>{name.reference}</td>
          <td>{name.customRef}</td>
          <td>{name.quantity}</td>
          <td>
            <input onChange={handleCheckBox} value={name.id} type="checkbox" />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Tbody;
