import CryptoJS from 'crypto-js';
import { useEffect, useState } from 'react';

export const Pago = ({ total, lastInsertedIdProp }) => {
  const [lastInsertedId, setLastInsertedId] = useState(0);
  const apiKey = '4Vj8eK4rloUd272L48hsrarnUA'; // defecto
  const merchantId = '508029'; // defecto
  const referenceCode = `000${lastInsertedId}`;
  const amount = total; 
  const currency = 'COP';

  // Concatenamos las variables en el orden correcto
  const textToHash = `${apiKey}~${merchantId}~${referenceCode}~${amount}~${currency}`;

  // Creamos el hash MD5
  const hash = CryptoJS.MD5(textToHash).toString();

  useEffect(() => {
    setLastInsertedId(lastInsertedIdProp);
  }, [lastInsertedIdProp]);

  return (
    <div>
      <form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
        <input name="merchantId" type="hidden" value="508029" />
        <input name="accountId" type="hidden" value="512321" />
        <input name="description" type="hidden" value="PAGOS DISFRUTA.EXE" />
        <input name="referenceCode" type="hidden" value={referenceCode} />
        <input name="amount" type="hidden" value={amount} /> 
        <input name="tax" type="hidden" value="0" />
        <input name="taxReturnBase" type="hidden" value="0" />
        <input name="currency" type="hidden" value="COP" />
        <input name="signature" type="hidden" value={hash} />
        <input name="test" type="hidden" value="0" />
        <input name="buyerEmail" type="hidden" value="test@test.com" />
        <input name="responseUrl" type="hidden" value="http://www.test.com/response" />
        <input name="confirmationUrl" type="hidden" value="http://localhost:3000/private/todofisica/fisica" />
        <button name="Submit" type="submit" variant="" style={{ backgroundColor: "black", color: "white" }}>
          PAGAR
        </button>
      </form>
    </div>
  );
};
