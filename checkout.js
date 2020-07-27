const verifyPaymentInfo = require('./node_modules/stripe/verifyPaymentInfo').verifyPaymentInfo;

let balance = 1000;

const chargeCreditCard = function (purchaseInfo) {
    balance -= purchaseInfo.price;
    if (balance > 0) {
        console.log("Succesfful purchase of:" + purchaseInfo.item);
        console.log("Your balance is:" + balance)
    } else {
        console.log("Insuficient balance")
    }
}

// const checkout = function (purchaseInfo) {
//     verifyPaymentInfo(purchaseInfo, function finishPurchase(err) {
//         if (err) {
//             console.error(err);
//             return;
//         } else {
//             chargeCreditCard(purchaseInfo)
//             // sendThanYouEmail(purchaseInfo.email);
//             // emptyCard()
//         }
//     })
// }

const checkout = function (purchaseInfo) {
    verifyPaymentInfo(purchaseInfo)
        .then(() => {
            chargeCreditCard(purchaseInfo)
        })
        .catch((err) => {
            console.error(err)
        })
}

const purchaseInfo = {
    username: 'Stevie',
    email: 'stevie@projecttwine.com',
    item: 'Air Force 1s',
    price: 70
}

checkout(purchaseInfo)