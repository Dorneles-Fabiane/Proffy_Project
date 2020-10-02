import Knex from 'knex';

// metodo up - qual alterações queremos realizar no banco de dados

export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}

// metodo down - volta as alterações, desfaz as alterações caso necessário
export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}