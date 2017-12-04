const express = ('require');
const app = express();

app.get ('/', (req, res) => {
  res.send({ hi: 'there' });
});

//
const PORT = Process.env.PORT || 5000
app.listen(5000);
