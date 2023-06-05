import React from 'react';
import logo from '../logos/icons/AEG.svg';
import ovenPic from '../img/AEG_Showroom_28Fev2023_009A6079.JPG';

export const HomePage = () => {
    return (
        <>
            <header className='header'>
                <a href="" className='header-content'>
                    <img src={logo} alt="AEG-logo" className='logo'/>
                </a>
            </header>
            <section>
                <div className='article'>
                    <div className='article-image'/>
                    <div className='article-text'>
                        <h1 className='section-title'>AEG ECOLINE</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur </p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='article-green'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga est doloremque, officiis deserunt animi adipisci similique neque architecto. Magnam sapiente exercitationem laboriosam dolores ipsam cupiditate dignissimos facere esse cum nulla? Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, in. Soluta neque dolor nobis laborum cumque, facilis eius blanditiis error doloremque, dolore temporibus nulla natus a expedita optio obcaecati maxime?
                    </div>
                </div>
                <button className='article-button'>Descubra AEG Ecoline</button>
            </section>
            <section>
                <div className='section-title'>
                    <h1>COZINHE A VAPOR * <br /> E PUPE 20% DE ENERGIA</h1>

                </div>
                <div className='saibaMais-content'>
                    <img src={ovenPic} alt="" className='saibaMais-img'/>
                    <p className='saibaMais-text' style={{ paddingBottom: '20px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis neque pariatur deleniti quia? Fuga animi qui dicta obcaecati voluptatum excepturi sapiente ipsa similique et? Quae impedit vel aut? Porro, possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor cupiditate, dolores sit quae eius blanditiis.</p>

                    <p className='saibaMais-text' style={{ marginBottom: '40px' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis commodi explicabo deserunt! Doloribus consectetur voluptatibus est porro deserunt a accusantium, quae nam! Hic, fugiat sapiente quaerat asperiores ad possimus ipsam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatibus, molestiae libero excepturi enim omnis a, deserunt labore laboriosam atque ad consequuntur sint quidem temporibus ea fugit molestias dicta <a href="" className='link'>ipsam</a> .</p>

                    <p className='saibaMais-text' style={{ marginBottom: '20px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatibus ullam unde quas necessitatibus laboriosam animi totam culpa, sit ratione quis inventore placeat, ex aliquid minima nobis quidem, mollitia autem?</p>
                </div>
                <div className='grayLine'/>
            </section>
            <section>
                <div className='section-title'>
                    <h1 style={{ color: 'red' }}>AEG HAUS</h1>
                    <h1>A NOSSA NOVA CASA</h1>
                </div>
                <p style={{color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ab maxime recusandae expedita corporis nam illo itaque iusto omnis doloribus quisquam.</p>
                <div>
                  
                </div>
            </section>
            <footer className='footer'>
                <div className='footer-content1'>
                    <p>Lorem ipsum dolor adipisicing elit. Sequi
                        <a href="" className='link'>ipsum</a> mollitia aliquam, laborum ad placeat amet.
                    </p>
                </div>
                <div className='footer-content2'>
                    <a href="" className='link'>Ver no browser</a>
                </div>
                <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam impedit perferendis saepe molestiae tempore sequi iusto architecto dolor
                    </p>
                </div>
            </footer>
        </>
    );
};