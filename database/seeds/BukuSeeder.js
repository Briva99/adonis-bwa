'use strict'
const moment = require('moment');

/*
|--------------------------------------------------------------------------
| BukuSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class BukuSeeder {
  async run () {
    // const buku = await Database.table('buku')
    // .insert([
    //   {
    //     judul: 'buku dummy data 4',
    //     tahun: 2012,
    //     deskripsi: 'Dummy data 4',
    //     created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
    //     updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
    //   },
    //   {
    //     judul: 'buku dummy data 5',
    //     tahun: 2012,
    //     deskripsi: 'Dummy data 5',
    //     created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
    //     updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
    //   }
    // ]);
    // console.log(buku);

    //await Factory.get('buku').create(); // untuk 1 data
    await Factory.get('buku').createMany(5); // data lebih dari 1
  }
}

module.exports = BukuSeeder
