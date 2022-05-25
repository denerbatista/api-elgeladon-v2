import mongoose from 'mongoose';
// const { connect  } = mongoose;

// export function connectToDatabase() {
//   connect(
//     "mongodb+srv://denerbatista:A1b2C3d4@cluster0.wmfpf.mongodb.net/?retryWrites=true&w=majority/Elgeladon",
//     // 'mongodb://localhost:27017/paletas-db',
//     // 'mongodb+srv://root:admin@hamburguer.oziw5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     },
//   )
//     .then(() => {
//       console.log('MONGO DB CONECTADO');
//     })
//     .catch((err) => {
//       return console.log(`Erro na conexao com o banco: ${err}`);
//     });
// }

export const connectToDatabase = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      // Variável de ambiente.
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Atlas Conectado!'))
    .catch((error) =>
      console.log(`Erro ao conectar com o MongoDB, erro: ${error}`),
    );
};
