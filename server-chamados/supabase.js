// supabase.js - Código LIMPO e SEGURO para o GitHub
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

// Lê as chaves do arquivo .env de forma segura
const supabaseUrl = "https://obnxdijwefkuhzmibolw.supabase.co";
const supabaseKey = "sb_publishable_eLIgmQ8nxSoxuv8J9cKqXw_PBb50jzo";

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
