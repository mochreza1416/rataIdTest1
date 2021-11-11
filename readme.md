## Test Case 1 Backend Engineer ##

#### Software yang perlu untuk di install

* Install node.js
* Install dependencies:
```bash 
npm install
```
* Install nodemon: 
```bash     
npm install -g nodemon
```
* Install WAMP Server atau XAMP untuk mysql
* Install Postman untuk cek API local
* Table akan auto generate berdasarkan model karena menggunakan db.sequelize.sync() tapi harus membuat database rataid di phpmyadmin
* Column id, createAt, dan updateAt akan auto generate ketika create data
* Menjalankan server di local machine : npm start
* URL dan query :
```bash 
getListAllProduksi by invoice number : get http://localhost:8081/api/produksi?invoice_number=INV-73456
const query = `SELECT orders.invoice_number, 
                          products.kode_barang, 
                          products.nama_barang, 
                          products.harga_barang, 
                          order_details.jumlah, 
                          orders.total, 
                          orders.tanggal_pesan, 
                          users.nama, 
                          users.alamat, 
                          produksis.status as status_produksi, 
                          produksis.catatan, 
                          produksis.tanggal_masuk, 
                          produksis.tanggal_produksi, 
                          produksis.tanggal_selesai, 
                          payments.metode_bayar, 
                          payments.bukti_bayar, 
                          payments.status as status_bayar, 
                          payments.tanggal_bayar 
                    FROM users 
                    LEFT JOIN orders ON orders.user_id = users.id 
                    LEFT JOIN order_details ON order_details.invoice_number = orders.invoice_number 
                    LEFT JOIN products ON products.kode_barang = order_details.kode_barang 
                    LEFT JOIN payments ON payments.invoice_number = orders.invoice_number 
                    LEFT JOIN produksis ON produksis.invoice_number = orders.invoice_number 
                    WHERE orders.invoice_number = '${req.query.invoice_number}'`;

Create update delete get data produksi
url create : post http://localhost:8081/api/produksi
payload:
{
    "invoice_number": "INV-73456",
    "status": "Sampai",
    "catatan": "Sudah di setujui oleh customer",
    "tanggal_masuk":"2021-11-13",
    "tanggal_produksi": "2021-11-13",
    "tanggal_selesai": "2021-11-13"
}
url delete : delete http://localhost:8081/api/produksi/INV-73456
url update : put http://localhost:8081/api/produksi/INV-73456
paylod:
{
    "status": "kirim",
    "catatan": "Sudah di setujui oleh customer",
    "tanggal_masuk":"2021-11-13",
    "tanggal_produksi": "2021-11-13",
    "tanggal_selesai": "2021-11-13"
}
url get all : get http://localhost:8081/api/produksi
url get produksi by invoice_number : get http://localhost:8081/api/produksi/INV-73456

Create update delete get data product
url create : post http://localhost:8081/api/product
payload:
{
    "kode_barang": "GTX-1212",
    "nama_barang": "Piring Gurame",
    "harga_barang": "20000",
    "stok":12,
    "status": "Aktif",
    "deskripsi": "Piring gurame pilihan terbaik"
}
url delete : delete http://localhost:8081/api/product/GTX-1212
url update : put http://localhost:8081/api/product/GTX-1212
paylod:
{
    "nama_barang": "sendok Gurame",
    "harga_barang": "20000",
    "stok":12,
    "status": "Aktif",
    "deskripsi": "sendok gurame pilihan terbaik"
}
url get all : get http://localhost:8081/api/product
url get product by kode_barang : get http://localhost:8081/api/product/GTX-1212

Create update delete get data order
url create : post http://localhost:8081/api/order
{
    "invoice_number": "INV-73456",
    "user_id": 1,
    "tanggal_pesan": "2020-11-12",
    "total":240000
}
url delete : delete http://localhost:8081/api/order/INV-73456
url update : put http://localhost:8081/api/order/INV-73456
{
    "user_id": 1,
    "tanggal_pesan": "2020-11-10",
    "total":240000
}
url get all : get http://localhost:8081/api/order
url get order by invoice_number : get http://localhost:8081/api/order/INV-73456

Create update delete get data order detail
url create : post http://localhost:8081/api/order_detail
{
    "invoice_number": "INV-73456",
    "kode_barang": "GTX-1212",
    "jumlah": "12"
}
url delete : delete http://localhost:8081/api/order_detail/INV-73456
url update : put http://localhost:8081/api/order_detail/INV-73456
{
    "kode_barang": "GTX-1212",
    "jumlah": "10"
}
url get all : get http://localhost:8081/api/order_detail
url get order detail by invoice_number : get http://localhost:8081/api/order_detail/INV-73456

Create update delete get data payment
url create : post http://localhost:8081/api/payment
{
    "invoice_number": "INV-73456",
    "metode_bayar": "Transfer",
    "bukti_bayar": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fapdovi.forum-vokasi.id%2Fbukti-transfer-pembayaran-web-seminar-seri-i-3-bukti-pembayaran-seminar-3-apdovi-jpeg%2F&psig=AOvVaw1JihuzNXPnbf0zXo-dZquK&ust=1636681917433000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLj_uL-Zj_QCFQAAAAAdAAAAABAD",
    "tanggal_bayar": "2020-11-12",
    "status": "Pending"
}
url delete : delete http://localhost:8081/api/payment/INV-73456
url update : put http://localhost:8081/api/payment/INV-73456
{
    "metode_bayar": "Transfer",
    "bukti_bayar": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fapdovi.forum-vokasi.id%2Fbukti-transfer-pembayaran-web-seminar-seri-i-3-bukti-pembayaran-seminar-3-apdovi-jpeg%2F&psig=AOvVaw1JihuzNXPnbf0zXo-dZquK&ust=1636681917433000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLj_uL-Zj_QCFQAAAAAdAAAAABAD",
    "tanggal_bayar": "2020-11-12",
    "status": "Lunas"
}
url get all : get http://localhost:8081/api/payment
url get payment by invoice_number : get http://localhost:8081/api/payment/INV-73456

Create update delete get data user
url create : post http://localhost:8081/api/user
{
    "username": "masanton",
    "password": "123456",
    "nama": "Mas Anton",
    "HP": "081222111111",
    "alamat": "Jalan Bunga no 24, Jakarta Barat",
    "email": "anton@gmail.com"
}
url delete : delete http://localhost:8081/api/user/1
url update : put http://localhost:8081/api/user/1
{
    "username": "masanton",
    "password": "123456",
    "nama": "Mas Anton",
    "HP": "081222111111",
    "alamat": "Jalan cikunir no 24, Jakarta Barat",
    "email": "anton@gmail.com"
}
url get all : get http://localhost:8081/api/user
url get user by id : get http://localhost:8081/api/user/1
```
