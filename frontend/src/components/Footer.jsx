
import logo from '../logo.svg'; // Adjust the path to your logo

const Footer = () => {
  return (
    <footer className="bg-gray-900 p-6 flex flex-col justify-between items-center">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="w-24 mb-2" />
          <p className="font-bold text-white">STÉ TUNIJAD SHOP</p>
          <p className="text-white">Vous avez des questions ? Appelez-nous !</p>
          <p className="text-white">58 888 757 / 58 88 06 05</p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-2 text-white">Liens utiles</h4>
          <ul className="list-none p-0 text-white">
            <li className="mb-1">Accueil</li>
            <li className="mb-1">Boutique</li>
            <li className="mb-1">Liste de souhaits</li>
            <li className="mb-1">Mon compte</li>
            <li className="mb-1">Panier</li>
            <li className="mb-1">Politique de confidentialité</li>
          </ul>
        </div>
      </div>
      <div className="w-full text-center mt-4 border-t border-gray-300 pt-4">
        <p className="text-white">© Tunijad Shop - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
