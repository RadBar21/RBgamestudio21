<?php
// gemini-proxy.php

// Povolení přístupu z vašich domén (CORS)
$allowed_origins = [
    'https://rbgamestudio21.eu',
    'https://github.com/RadBar21/', // Nahraďte svým přesným jménem na GitHubu
    'http://localhost:3000'
];

if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowed_origins)) {
    header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
}
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Pokud jde o předběžný dotaz (preflight), ukončíme skript
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

// --- VÁŠ API KLÍČ (zde je v bezpečí, nikdo ho neuvidí) ---
$api_key = "VÁŠ_NOVÝ_API_KLÍČ_Z_AI_STUDIA";
// -------------------------------------------------------

$url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" . $api_key;

// Načtení těla požadavku z Reactu
$json_input = file_get_contents('php://input');

// Odeslání požadavku na Google Gemini
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $json_input);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Vrácení odpovědi zpět do Reactu
http_response_code($http_code);
header('Content-Type: application/json');
echo $response;
?>