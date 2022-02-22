/* eslint-disable react/no-array-index-key */
interface TbodyProps {
  listCommande: string[];
}

const Tbody: React.FC<TbodyProps> = ({ listCommande }) => {
  return (
    <tr>
      {listCommande.map((name, i) => (
        <td key={i}>{name}</td>
      ))}
    </tr>
  );
};

export default Tbody;
