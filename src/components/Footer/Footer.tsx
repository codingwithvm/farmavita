import './styles.css'

export function Footer() {
    return (
        <footer className='bg-primary'>
            <article className='about'>
                <h1>Sobre nós</h1>
                <p>Nossa farmácia oferece uma ampla gama de produtos de alta qualidade para atender suas necessidades de saúde e bem-estar.</p>
            </article>
            <div className='footer-menu'>
                <article>
                    <h1>Contato</h1>
                    <ul>
                        <li>Email</li>
                        <li>Endereço</li>
                        <li>Telefone</li>
                    </ul>
                </article>
                <article>
                    <h1>Links Úteis</h1>
                    <ul>
                        <li>Política e Privacidade</li>
                        <li>Termos e Condições</li>
                        <li>Atendimento ao Cliente</li>
                    </ul>
                </article>
                <article>
                    <h1>Siga-nos</h1>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </article>
            </div>
            <div className='copy'>
                © 2024 Farmácia Exemplo. Todos os direitos reservados.
            </div>
        </footer>
    )
}