var motoGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentina',
        winner: {
            firstName: 'Cal',
            lastName: 'Crutchlow',
            country: 'UK'
        }
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            lastName: 'Rossi',
            country: 'Italy'
        }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    }
];

var result = [];

for (var i = 0; i < motoGP.length; i++) {
    var country = motoGP[i].winner.country;
    var found = false;

    for (var j = 0; j < result.length; j++) {
        if (result[j].country == country) {
            result[j].totalWin++;
            result[j].data.push(motoGP[i]);
            found = true;
            break;
        }
    }

    if (found == false) {
        result.push({
            country: country,
            totalWin: 1,
            data: [motoGP[i]]
        });
    }
}

for (var i = 0; i < result.length; i++) {
    for (var j = i + 1; j < result.length; j++) {
        if (result[j].totalWin > result[i].totalWin) {
            var temp = result[i];
            result[i] = result[j];
            result[j] = temp;
        }
    }
}

for (var i = 0; i < result.length; i++) {
    console.log(result[i].country + ':');

    for (var j = 0; j < result[i].data.length; j++) {
        console.log('winning circuits: ' +
            result[i].data[j].circuit);
        console.log('name: ' +
            result[i].data[j].winner.firstName + ' ' +
            result[i].data[j].winner.lastName);
        console.log('win location: ' +
            result[i].data[j].location);
        console.log('');
    }

    console.log('Total win: ' + result[i].totalWin);
    console.log('');
}