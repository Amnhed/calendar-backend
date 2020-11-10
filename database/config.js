const mongoose = require('mongoose');

const dbConection = async() => {
    try {
        //retornara una promesa
        await mongoose.connect(
            process.env.DB_CNN, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            });
            console.log('DB online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar BD');
    }    
}

module.exports = {
    dbConection
}