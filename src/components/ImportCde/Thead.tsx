/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
interface TheadProps {
  listCommande: any[];
}

const Thead: React.FC<TheadProps> = ({ listCommande }) => {
  return (
    <thead>
      <tr>
        {listCommande[0].map((name: any, i: number) => (
          <th key={i}>{name}</th>
        ))}
      </tr>
    </thead>
  );
};

export default Thead;
