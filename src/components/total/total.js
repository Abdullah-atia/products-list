import React from 'react';

const Total = (props) => {
    const {items} = props;
    let total = 0
    // for (let i = 0; i < items.length; i++) {
    //     let cout = parseFloat(items[i].quantity)
    //     let price = parseFloat(items[i].price)
    //     total += price * cout
    // }
    for (let i = 0; i < items.length; i++) {
        let count = parseFloat(items[i].quantity);
        let price = parseFloat(items[i].price);

        // Add checks to handle NaN cases
        if (!isNaN(count) && !isNaN(price)) {
            total += price * count;
        } else {
            // Handle the case where parsing fails
            console.error(`Error parsing quantity or price at index ${i}`);
        }
    }
    return (
        <div>
            <p className="text">Total Price: {total}</p>
        </div>
    )
}

export default Total