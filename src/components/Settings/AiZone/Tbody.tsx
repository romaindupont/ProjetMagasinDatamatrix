/* eslint-disable react/no-array-index-key */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
interface TbodyProps {
  aiList: any[];
  searchText: string;
  filterTarget: string;
}

const Tbody: React.FC<TbodyProps> = ({ aiList, searchText, filterTarget }) => {
  let newList = aiList.filter((list) => {
    if (filterTarget === '1') {
			return list.referenceHq.toLowerCase().includes(searchText);
  	}
		if (filterTarget === '2') {
			return list.ai.toLowerCase().includes(searchText);
  	}
		if (filterTarget === '3') {
			return list.refManitou.toLowerCase().includes(searchText);
  	}
		if (filterTarget === '4') {
			return new Date(list.dateFlash).toLocaleDateString('fr-FR').toLowerCase().includes(searchText);
  	}
    if (filterTarget === '5') {
    	return list.paletNumber.toLowerCase().includes(searchText);
  	}
		return true;
});
  if (newList.length === 0) {
    newList = aiList;
  }
  return (
    <tbody>
      {newList.map((list, i) => (
        <tr key={i} id={list.id}>
          <td>{list.id}</td>
          <td>{list.referenceHq}</td>
          <td>{list.ai}</td>
          <td>{list.refManitou}</td>
          <td>{new Date(list.dateFlash).toLocaleDateString('fr-FR')}</td>
          <td>{list.paletNumber}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default Tbody;
