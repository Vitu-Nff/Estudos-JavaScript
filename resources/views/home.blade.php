@extends('layouts.default')

@section('title', 'Jogo do 21')

@section('content')

    <div class="container text-center">
        <h1 class="title"> Jogo do 21 </h1>
        <div class="row">
            <div class="col active player">
                <img src="/assets/player1.png" alt="Player 1">
                <p>Player 1</p>
                <p><strong>Pontos: </strong><span class="score">0</span></p>
            </div>
            <div class="col player">
                <img src="/assets/player2.png" alt="Player 2">
                <p>Player 2</p>
                <p><strong>Pontos: </strong><span class="score">0</span></p>
            </div>
        </div>

        <div class="row">
            <div class="col controls">
                <button id="pular" class="btn btn-success">Pular</button>
                <button id="finalizar" class="btn btn-primary">Finalizar</button>
                <button id="reiniciar" class="btn btn-danger">Reiniciar</button>
            </div>
        </div>

        <hr>

        <div class="row cards">
            <div class="col">
                    <img class="cards" id="baralho" src="/assets/baralho-cartas.png" alt="Baralho">
            </div>
            <div class="col selected">
                <img id="selectedCard" class="hidden" src="/assets/carts/10.png" alt="Carta selecionada">
            </div>
        </div>
    </div>
@endsection
