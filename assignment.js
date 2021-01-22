//1.KilometerToMeter
function kilometerToMeter(kilometer) {
    var meter = 0;
    if (kilometer < 0) {
        return "Negative Values Not Allow"
    }
    else {
        meter = (kilometer * 1000)
    }
    return meter;
}
var meter = kilometerToMeter(156);
console.log(meter);

//2.budgetCalculator
function budgetCalculator(watch, phone, laptop) {

    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;

    var total = 0;

    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Negative Values Not Allow";
    }
    else if (watch >= 0 || phone >= 0 || laptop >= 0) {
        watchPrice = watch * watchPrice,
            phonePrice = phone * phonePrice,
            laptopPrice = laptop * laptopPrice

        total = watchPrice + phonePrice + laptopPrice;
        return total;
    }
    else {
        total = watchPrice + phonePrice + laptopPrice;
        return total;
    }

    return total;
}

var result = budgetCalculator(4, 2, 3);
console.log(result);

//3.hotelCost
function hotelCost(days) {
    var before10 = 100;
    var before20 = 80;
    var after20 = 50;

    var totalCost = 0;

    if (days <= 0) {
        return "Negative Values Not Allow";
    }
    else if (days <= 10) {
        totalCost = days * before10;
    }
    else if (days <= 20) {

        var afterTenDays = days - 10;
        before10 = 10 * 100;
        before20 = afterTenDays * before20;

        totalCost = before10 + before20;

    }
    else {

        var afterTwentyDays = days - 20;
        before10 = 10 * 100;
        before20 = 10 * 80;
        after20 = afterTwentyDays * after20;

        totalCost = before10 + before20 + after20;

    }

    return totalCost;
}

var totalCost = hotelCost(71);
console.log(totalCost);

//4.megaFriend
var friends = ['Mahjabin', 'Kabir', 'Ramisha', 'saifurrahman', 'barakobamamishel'];
function megaFriend(friends) {
    var megaFriend = [];
    var maxWord = friends[0];
    var length = 0;
    for (var i = 0; i < friends.length; i++) {
        var element = friends[i].length;
        if (element > length) {
            length = element;
            maxWord = friends[i];
            megaFriend[0] = maxWord;


        }
    }
    return megaFriend;
}
var result = megaFriend(friends);
console.log(result);