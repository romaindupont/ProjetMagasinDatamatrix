import InputOrder from 'containers/Planning/Settings/Orders/InputOrder';
import { notification } from '../../../utils/notification';

interface OrdersProps {
  onClick: (e: React.SyntheticEvent) => void;
  updateLineOrder: (
    id: number,
    reference: string,
    customRef: string,
    quantity: number,
    deliveryQuantity: number,
    dateNeed: string,
    numeroCde: string
  ) => void;
  id: number;
  importBdd: (
    reference: string,
    quantity: number,
    dateNeed: string,
    numeroCde: string
  ) => void;
}

const Form: React.FC<OrdersProps> = ({ updateLineOrder, id, importBdd }) => {
  const getModify = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      id: { value: number };
      reference: { value: string };
      customRef: { value: string };
      quantity: { value: number };
      deliveryQuantity: { value: number };
      dateNeed: { value: string };
      numeroCde: { value: string };
    };
    if (id > 0) {
      return updateLineOrder(
        target.id.value,
        target.reference.value,
        target.customRef.value,
        target.quantity.value,
        target.deliveryQuantity.value,
        target.dateNeed.value,
        target.numeroCde.value
      );
    }
    if (
      target.reference.value !== '' &&
      target.quantity.value > 0 &&
      target.dateNeed.value !== '' &&
      target.numeroCde.value !== ''
    ) {
      return importBdd(
        target.reference.value,
        target.quantity.value,
        target.dateNeed.value,
        target.numeroCde.value
      );
    }
    return notification(
      'Il manque des informations, tous les champs soulignés en vert doivent être remplis'
    );
  };
  return (
    <form className="order-input" onSubmit={getModify}>
      <InputOrder
        type="number"
        name="id"
        placeholder="id"
        readOnly="readOnly"
      />
      <InputOrder
        type="text"
        name="reference"
        placeholder="Référence HQ"
        readOnly=""
        className={id > 0 ? '' : 'selectInput'}
      />
      <InputOrder
        type="text"
        name="customRef"
        placeholder="custom Ref"
        readOnly=""
      />
      <InputOrder
        type="number"
        name="quantity"
        placeholder="Quantité besoin"
        readOnly=""
        className={id > 0 ? '' : 'selectInput'}
      />
      <InputOrder
        type="number"
        name="deliveryQuantity"
        placeholder="Solde"
        readOnly=""
      />
      <InputOrder
        type="text"
        name="dateNeed"
        placeholder="date de besoin"
        readOnly=""
        className={id > 0 ? '' : 'selectInput'}
      />
      <InputOrder
        type="text"
        name="numeroCde"
        placeholder="Numéro Commande"
        readOnly=""
        className={id > 0 ? '' : 'selectInput'}
      />
      <button type="submit" className="chargement--button" onSubmit={getModify}>
        {id > 0 ? 'Modifier' : 'Valider'}
      </button>
    </form>
  );
};

export default Form;
