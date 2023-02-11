let produk = [
    {
        id : 1621812363864,
        kategori : `Fast Food`,
        nama : `Noodle`,
        harga : 3500,
        stok : 9
    },
    {
        id : 1621812363865,
        kategori : `Electronik`,
        nama : `Headset`,
        harga : 300000,
        stok : 10
    },
    {
        id : 1621812363866,
        kategori : `Cloth`,
        nama : `Jaket Hoody`,
        harga : 2500000,
        stok : 8
    },
    {
        id : 1621812363867,
        kategori : `Fruit`,
        nama : `Apple`,
        harga : 10000,
        stok : 7
    },
]

class Produk {
    constructor(id, kategori, nama, harga, stok){
        this.id = id
        this.kategori = kategori
        this.nama = nama
        this.harga = harga
        this.stok = stok
    }
} 
let indeksEdit = null

let cart = [
    // {
    //     id : 1621812363866,
    //     kategori : `Cloth`,
    //     nama : `Jaket Hoody`,
    //     harga : 2500000,
    //     qty : 8
    // },
    // {
    //     id : 1621812363867,
    //     kategori : `Fruit`,
    //     nama : `Apple`,
    //     harga : 10000,
    //     qty : 7
    // },
] //penampung untuk cart

let totalHarga = 0
let paymen = false