'use strict'

class BelajarAdoniController {
    index({request, response}){
        const data = request.get(); //mengambil params dari url
        console.log(data);
        return data;
    }
    create({request, response}){
        // const data = request.post();
        // console.log(data);
        // return data;

        //menampilkan kreteria tertentu
        // const data = request.only(['nama','jurusan']);
        // console.log(data);
        // return data;

        //menampilkan semua data kecuali data yang ada  di array
        // const data1 = request.except(['nama']);
        // console.log(data1);
        // return data1;

        //menampilkan dengan key tertentu
        const nama = request.input('nama','nama default value : bagus');   // menampilkan key nama
        console.log(nama);                  // default value => ketika 'nama' kosong
        return nama;
    }
}

module.exports = BelajarAdoniController
