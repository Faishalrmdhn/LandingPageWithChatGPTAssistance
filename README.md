# LandingPageWithChatGPTAssistance
Creating a Landing Page with ChatGPT Assistance


## First attempt dialogue
1. ![image](https://user-images.githubusercontent.com/66148701/210471109-1c656cd4-3d54-41da-b72a-f13aeb5c72e2.png) | Make me an html script about umrah landing page
2. ![image](https://user-images.githubusercontent.com/66148701/210471148-de6124e2-bdd0-4e81-b391-ed36263a995c.png) | Give me the css
The answer:
```
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Paket Umroh Terbaik</title>
</head>
<body>
  <header>
    <h1>Paket Umroh Terbaik</h1>
  </header>
  <nav>
    <ul>
      <li><a href="#intro">Intro</a></li>
      <li><a href="#itinerary">Itinerary</a></li>
      <li><a href="#pricing">Pricing</a></li>
      <li><a href="#faq">FAQ</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
  <main>
    <section id="intro">
      <h2>Selamat datang di Paket Umroh Terbaik</h2>
      <p>Kami menyediakan paket umroh terbaik dengan harga yang terjangkau. Dapatkan pengalaman yang tak terlupakan bersama kami.</p>
    </section>
    <section id="itinerary">
      <h2>Itinerary</h2>
      <ol>
        <li>Hari pertama: Keberangkatan dari Jakarta</li>
        <li>Hari kedua: Tiba di Madinah</li>
        <li>Hari ketiga: Ziarah ke Masjid Nabawi</li>
        <li>Hari keempat: Berangkat ke Mekkah</li>
        <li>Hari kelima: Ziarah ke Masjidil Haram</li>
        <li>Hari keenam: Tawaf Wada' (Goodbye Tawaf) dan kembali ke Jakarta</li>
      </ol>
    </section>
    <section id="pricing">
      <h2>Pricing</h2>
      <table>
        <tr>
          <th>Tipe Kamar</th>
          <th>Harga</th>
        </tr>
        <tr>
          <td>Deluxe</td>
          <td>Rp 35.000.000</td>
        </tr>
        <tr>
          <td>Superior</td>
          <td>Rp 40.000.000</td>
        </tr>
        <tr>
          <td>Executive</td>
          <td>Rp 45.000.000</td>
        </tr>
      </table>
    </section>
    <section id="faq">
      <h2>FAQ</h2>
      <h3>Apakah dokumen yang dibutuhkan untuk mengikuti paket umroh ini?</h3>
      <p>Anda akan membutuhkan paspor dengan masa berlaku minimal 7 bulan serta foto berwarna ukuran 4 x 6 cm. Selain itu, anda juga harus mengirimkan fotokopi KTP dan KK serta mengisi formulir pendaftaran yang akan kami kirimkan kepada anda setelah anda melakukan pembayaran booking fee.</p>
<h3>Apakah sudah termasuk biaya transportasi dari Jakarta ke Madinah dan Mekkah?</h3>
<p>Ya, biaya transportasi dari Jakarta ke Madinah dan Mekkah sudah termasuk dalam harga paket umroh kami. Anda tidak perlu khawatir tentang pembayaran tambahan untuk transportasi tersebut.</p>
<h3>Apakah sudah termasuk biaya makan selama perjalanan?</h3>
<p>Ya, biaya makan selama perjalanan sudah termasuk dalam harga paket umroh kami. Anda akan mendapatkan 3 kali makan sehari di hotel yang sudah kami sediakan.</p>
<h3>Bagaimana cara melakukan pembayaran?</h3>
<p>Anda dapat melakukan pembayaran melalui transfer ke rekening bank kami atau melalui pembayaran online menggunakan kartu kredit atau debit.</p>
</section>
<section id="contact">
<h2>Contact</h2>
<p>Jika anda memiliki pertanyaan atau ingin melakukan pemesanan, silahkan hubungi kami melalui:</p>
<ul>
<li>Telepon: 021-123456</li>
<li>Email: info@paketumrohterbaik.com</li>
</ul>
<p>Atau anda juga dapat mengisi formulir yang tersedia di halaman ini, kami akan segera menghubungi anda sesegera mungkin.</p>
<form>
<label for="name">Nama:</label><br>
<input type="text" id="name" name="name"><br>
<label for="email">Email:</label><br>
<input type="text" id="email" name="email"><br>
<label for="message">Pesan:</label><br>
<textarea id="message" name="message"></textarea><br>
<input type="submit" value="Kirim">
</form>
</section>

  </main>
  <footer>
    Copyright &copy; 2020 Paket Umroh Terbaik
  </footer>
</body>
</html>
```

```
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #FFC107;
  padding: 20px;
  text-align: center;
}

header h1 {
  color: white;
  font-size: 2em;
  margin: 0;
}

nav {
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  margin: 0 10px;
}

nav a {
  color: white;
  text-decoration: none;
}

main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
}

section {
  width: 45%;
  padding: 20px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.1);
}

section h2 {
  margin: 0;
}

section table {
  width: 100%;
  border-collapse: collapse;
}

section th, section td {
  border: 1px solid lightgrey;
  padding: 10px;
  text-align: left;
}

section th {
  background-color: #FFC107;
  color: white;
}

section form {
  display: flex;
  flex-direction: column;
}

section label {
  font-weight: bold;
  margin-bottom: 5px;
}

section input[type="text"],
section textarea {
  width: 100%;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 10px;
  font-size: 1em;
  margin-bottom: 20px;
}

section input[type="submit"] {
  background-color: #FFC107;
  border: none;
  color: white;
  font-size: 1em;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

footer {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
}
```
Result:

![html CssBasic](https://user-images.githubusercontent.com/66148701/210471424-17c45fb3-bf3d-4e52-bc1e-523dc79be8ed.png)
