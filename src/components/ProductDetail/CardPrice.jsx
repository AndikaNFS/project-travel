import React from 'react';
import { NumericFormat } from 'react-number-format';

const CardPrice = ({ result, onChange }) => {
  // console.log(result);
  // console.log('xzc');
  // console.log(result);
  return (
    <label onChange={onChange}>
      <input
        type="radio"
        id={result._id}
        value={result._id}
        name="ticket"
        className="hidden peer/ticket"
      />
      <div className="flex flex-col p-3 rounded-lg gap-y-4 bg-primary-color-2 peer-checked/ticket:bg-primary-color-1 peer-checked/ticket:text-text-color-1 ">
        <span className="text-xs font-bold sm:text-base 2xl:text-lg">
          {result.name}
        </span>
        <NumericFormat
          value={result.price}
          prefix="Rp. "
          thousandSeparator="."
          decimalSeparator=","
          displayType="text"
          className="text-xs font-semibold sm:text-base "
        />
      </div>
    </label>
  );
};

export default CardPrice;
