var data = [{
        quantity: 1.5,
        description: 'Stock Item Example 0001',
        unitPrice: 1000.00,
        amount: 1500.00
    },
    {
        quantity: 1,
        description: "Stock Item Example 0002",
        unitPrice: 2000.00,
        amount: 2000.00
    },
    {
        quantity: 1,
        description: "Service Charge Invoicing Item 001",
        unitPrice: 100.00,
        amount: 200.00
    },
    {
        quantity: 1,
        description: `Service Charge Invoicing Item 002<br/>
                    Additional line 1 for this item<br/>
                    Additional line 2 for this item`,
        unitPrice: 200.00,
        amount: 600.00
    }
]

function renderDataTable() {
    var subTotal = 0
    $('#dataTable').empty();
    data.forEach(function (item) {
        subTotal += item.amount
        var dataRow = generateDataRow(item);
        $('#dataTable').append(dataRow)
    })
    subTotal = subTotal;
    let tax = (subTotal * 7 / 100);
    let dueVal = (subTotal + tax).toFixed(2);
    $('#subtotal-value').text(subTotal.toFixed(2));
    $('#sales-tax-value').text(tax.toFixed(2));
    $('#total-due-value').text(dueVal); 
}

function generateDataRow(item) {
    console.log({item})
    var unitPrice = parseFloat(item.unitPrice).toFixed(2)
    var dataRow =`<tr>
        <td class="border-left border-right border-dark r border-bottom data-quan-padding">${item.quantity}</td>
        <td class="border-left border-right border-dark border-bottom data-desc-padding">${item.description}</td>
        <td class="border-left border-right border-bottom border-dark r data-price-padding">${unitPrice}</td>
        <td class="border-left border-right border-dark r data-price-padding">${item.amount}</td>
        </tr>`
    console.log({dataRow});
    return dataRow;
}

$(document).ready(function () {
    let count = 0;
    console.log("hello");
    renderDataTable();

    $('#btnAdd').click(function () {
        console.log("Clicked!", count);
        count++;
        let qty = prompt("Quantity");
        let d = prompt("Description");
        let p = prompt("Unit price");
        let amt = parseFloat(qty) * parseFloat(p);
        let item = {
            quantity: qty,
            description: d,
            unitPrice: p,
            amount: amt
        }
        console.log({ item })
        data.push(item)
        renderDataTable()
    })

    let date = new Date();
    let dateString = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`
    $('#date').text(dateString);
});