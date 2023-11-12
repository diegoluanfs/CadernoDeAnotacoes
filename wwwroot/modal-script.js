// modal-script.js

var modalContent = `
    <!-- Modal dos h -->
    <div class="modal fade" id="hModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Exemplo: Títulos de Diferentes Níveis</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Exemplo de uso dos títulos:</p>
                    <!-- Adicione o exemplo aqui -->
                    <h1>Título de Nível 1</h1>
                    <h2>Título de Nível 2</h2>
                    <h3>Título de Nível 3</h3>
                    <h4>Título de Nível 4</h4>
                    <h5>Título de Nível 5</h5>
                    <h6>Título de Nível 6</h6>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Segundo Modal paragraphs -->
    <div class="modal fade" id="pModal" tabindex="-1" role="dialog" aria-labelledby="paragrafoModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="paragrafoModalLabel">Exemplo: Parágrafo com Ipsum Lorem</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Exemplo de parágrafo com texto Ipsum Lorem:</p>
                    <!-- Adicione o exemplo aqui -->
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>
`;

// Adicione o conteúdo do modal ao corpo do documento
document.body.insertAdjacentHTML('beforeend', modalContent);
