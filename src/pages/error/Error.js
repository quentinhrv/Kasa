import React from 'react';
import { Link } from 'react-router-dom';

import './_error.scss';

function Error() {
    return (
        <div className='error'>
            <main>
                <div className="error_page">
                    <div>
                        <h1>404</h1>
                        <p>Oups! La page que vous demandez n'existe pas.</p>
                    </div>
                <Link to="/">Retourner sur la page d'accueil</Link>
                </div>
            </main>
        </div>
    );
};

export default Error;