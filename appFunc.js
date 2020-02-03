module.exports = function bookSIte(pool) {

    // var greeting = " "
    // var upperCase;
    // var name;

    async function setName(namez) {

        upperCase = namez.charAt(0).toUpperCase() + namez.slice(1).toLowerCase();

        name = await pool.query("SELECT * FROM namestoGreet");
        if (upperCase === '') {
            return;
        } else {
            let names = await pool.query("SELECT * FROM namestoGreet WHERE people = $1", [upperCase]);
            if (names.rowCount === 1) {
                await pool.query('UPDATE namestoGreet SET count = count + 1 WHERE people = $1', [upperCase]);
            } else {
                await pool.query("INSERT INTO namestoGreet (people,count) VALUES ($1,$2);", [upperCase, 1]);

            }
        }
    }
    return {
        setName,
        getName,
        getCount,
        langGreet,
        getGreeting,
        toReset





    }
}