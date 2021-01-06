function backModal() {
    $('#payment-modal').hide();
    $('.modal-backdrop').remove();
    $('#period-modal').empty();
    $('#monthly-interest-modal').empty();
    $('#monthly-payment-modal').empty();
    $('#buy-button').prop('disabled', true);
}

function showDetailFromImage(element) {
    var img = $(element).children('img');
    var imgId = $(img).attr('id');
    var id = imgId.substring(imgId.length - 2, imgId.length);
    showDetail(id);
}

function addModalDetailFromFirstPage(id) {
    var helperId = id.substring(id.length - 2, id.length);
    addModalDetail(helperId);
}

function addModalDetail(id) {
    var col = $('<div class="col-sm-5"></div>');
    var priceInput = $(`#price-${id}`).val();
    var priceText = $(`#price-text-${id}`).text();
    var bd = $('<div class="modal-backdrop blur-bd"></div>');
    var modal = $('#payment-modal')
    bd.appendTo(document.body);
    $('#price-modal-text').text(priceText);
    $('#price-modal').val(priceInput)
    modal.show();
}

function showDetail(id) {
    var text = detail[id];
    var desc = $('<p></p>').text(text).addClass('desc-text');

    var price = $(`#price-text-${id}`).text();
    var priceText = $('<h5></h5>').addClass(
        'font-weight-bold price-text-desc text-danger').text(price);

    var buttonId = `buy-${id}`;
    var button = $('<button type="button"></button>').prop({
            class: "btn btn-dark detail-button-desc",
            id: buttonId
        })
        .text("BUY");

    $(button).click(function () {
        addModalDetail(id);
    })

    var priceInput = $(`#price-${id}`).detach();

    $(`#desc-${id}`).empty();
    priceText.attr('id', `price-text-${id}`);
    $(`#desc-${id}`).append(desc);
    $(`#desc-${id}`).append(priceText);
    $(`#desc-${id}`).append(priceInput);
    $(`#desc-${id}`).append(button);
}

var detail = {
    "p1": "a 19th-century romantic eclecticism palace on a rugged hill above the village in Germany",
    "p2": "a massive stone monument located on a chalky plain north of the modern-day city in England",
    "p3": "a large pre-Columbian city built by the Maya people of the Terminal Classic period",
    "p4": "the world's largest art museum and a historic monument in Paris, France",
    "p5": "a multi-venue performing arts centre at Sydney Harbour located in Sydney"
}

$(document).ready(function () {
    // detail section
    $('[id^="p"]').each(function () {
        $(this).click(function () {
            showDetail($(this).attr('id'));
        })
    })

    // payment section
    $('.btn-interest-rate').each(function () {
        $(this).click(function () {
            var price = parseInt($('#price-modal').val());
            var interest = parseInt($(this).val());
            var yearPeriod = 1;
            if (interest === 4) {
                yearPeriod = 2;
            } else if (interest === 8) {
                yearPeriod = 3;
            }

            var monthPeriod = yearPeriod * 12;
            var yearlyInterest = price * interest / 100;
            var monthlyInterest = yearlyInterest / 12;
            var totalInterest = yearlyInterest * yearPeriod;
            var totalPayment = price + totalInterest;
            var monthlyPayment = totalPayment / monthPeriod;

            $('#period-modal').text(monthPeriod);
            $('#monthly-interest-modal').text(monthlyInterest
                .toLocaleString('th-TH', {
                    'minimumFractionDigits': 2,
                    'maximumFractionDigits': 2
                }));
            $('#monthly-payment-modal').text(monthlyPayment
                .toLocaleString('th-TH', {
                    'minimumFractionDigits': 2,
                    'maximumFractionDigits': 2
                }));
            $('#buy-button').prop('disabled', false);
        })
    })

    $('.btn-period-rate').each(function () {
        $(this).click(function () {
            var price = parseInt($('#price-modal').val());
            var yearPeriod = parseInt($(this).val());
            var interest = 0;
            if (yearPeriod === 2) {
                interest = 4;
            } else if (yearPeriod === 3) {
                interest = 8;
            }

            var monthPeriod = yearPeriod * 12;
            var yearlyInterest = price * interest / 100;
            var monthlyInterest = yearlyInterest / 12;
            var totalInterest = yearlyInterest * yearPeriod;
            var totalPayment = price + totalInterest;
            var monthlyPayment = totalPayment / monthPeriod;

            $('#period-modal').text(monthPeriod);
            $('#monthly-interest-modal').text(monthlyInterest
                .toLocaleString('th-TH', {
                    'minimumFractionDigits': 2,
                    'maximumFractionDigits': 2
                }));
            $('#monthly-payment-modal').text(monthlyPayment
                .toLocaleString('th-TH', {
                    'minimumFractionDigits': 2,
                    'maximumFractionDigits': 2
                }));
            $('#buy-button').prop('disabled', false);
        })
    })

    $('#buy-button').click(function () {
        alert('Done!');
        location.reload();
    })


    $('[id^="buy-p"]').each(function () {
        $(this).click(function () {
            addModalDetailFromFirstPage(this.id);
        })
    })

});