/* eslint-disable radix */
interface TbodyProps {
  moqList: any[];
  saveSelectCase: (
    id?: number | string,
    reference?: string,
    moq?: number | string
  ) => void;
  id: number | string;
  id_ref: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Tbody: React.FC<TbodyProps> = ({ moqList, saveSelectCase }) => {
  const handleCheckBox = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      document.getElementById(`${e.target.value}`)?.classList.add('checked');
      const searchLine = moqList.find(
        (list) => list.id === parseInt(e.target.value)
      );
      saveSelectCase(searchLine.id, searchLine.id_ref, searchLine.moq);
    }
    if (!e.target.checked) {
      document.getElementById(`${e.target.value}`)?.classList.remove('checked');
      saveSelectCase('', '', '');
    }
  };
  return (
    <tbody>
      {moqList.map((list, i) => (
        <tr key={i} id={list.id}>
          <td>{list.id}</td>
          <td>{list.id_ref}</td>
          <td>{list.moq}</td>
          <td>
            <input value={list.id} onChange={handleCheckBox} type="checkbox" />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Tbody;
