import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
	return (
		<main>
		 <div className='w-[100%] bg-white p-2 flex items-center justify-center gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4.16171 18.73L6.93671 11.02C7.00671 10.8413 7.11005 10.7063 7.24671 10.615C7.38338 10.5243 7.53238 10.479 7.69371 10.479C7.80171 10.479 7.90105 10.4943 7.99171 10.525C8.08305 10.5557 8.17238 10.6147 8.25971 10.702L13.2397 15.682C13.327 15.7693 13.386 15.8587 13.4167 15.95C13.4474 16.0413 13.4627 16.1407 13.4627 16.248C13.4627 16.4093 13.4174 16.5583 13.3267 16.695C13.2354 16.8317 13.1007 16.935 12.9227 17.005L5.21171 19.781C5.04971 19.8383 4.89305 19.8477 4.74171 19.809C4.59038 19.7697 4.46105 19.6963 4.35371 19.589C4.24571 19.481 4.17238 19.3513 4.13371 19.2C4.09505 19.0487 4.10438 18.892 4.16171 18.73ZM21.6597 7.52601C21.573 7.62468 21.4717 7.67401 21.3557 7.67401C21.2397 7.67401 21.1384 7.63101 21.0517 7.54501L20.9957 7.48901C20.6857 7.17901 20.317 7.02401 19.8897 7.02401C19.463 7.02401 19.0947 7.17901 18.7847 7.48901L13.7287 12.545C13.6427 12.6317 13.5414 12.678 13.4247 12.684C13.308 12.6907 13.2004 12.6443 13.1017 12.545C13.003 12.4457 12.9537 12.3413 12.9537 12.232C12.9537 12.1213 13.003 12.0167 13.1017 11.918L18.1577 6.86301C18.627 6.39368 19.198 6.15901 19.8707 6.15901C20.544 6.15901 21.1154 6.39368 21.5847 6.86301L21.6597 6.93801C21.745 7.02334 21.7877 7.12134 21.7877 7.23201C21.7877 7.34201 21.745 7.44001 21.6597 7.52601ZM9.78271 4.77501C9.88138 4.67634 9.98571 4.62701 10.0957 4.62701C10.2064 4.62701 10.311 4.67634 10.4097 4.77501L10.7077 5.07301C11.241 5.60634 11.5077 6.25268 11.5077 7.01201C11.5077 7.77068 11.241 8.41668 10.7077 8.95001L10.4207 9.23701C10.3347 9.32234 10.2334 9.36834 10.1167 9.37501C10 9.38168 9.89238 9.33568 9.79371 9.23701C9.69505 9.13834 9.64571 9.03368 9.64571 8.92301C9.64571 8.81301 9.69505 8.70867 9.79371 8.61001L10.0807 8.32301C10.442 7.96168 10.6227 7.52468 10.6227 7.01201C10.6227 6.49868 10.442 6.06134 10.0807 5.70001L9.78271 5.40201C9.69605 5.31601 9.64971 5.21468 9.64371 5.09801C9.63705 4.98134 9.68338 4.87368 9.78271 4.77501ZM13.4477 3.31301C13.5464 3.21434 13.651 3.16501 13.7617 3.16501C13.8717 3.16501 13.976 3.21434 14.0747 3.31301L15.1307 4.36901C15.6127 4.85101 15.8537 5.42868 15.8537 6.10201C15.8537 6.77534 15.6127 7.35301 15.1307 7.83501L12.0747 10.89C11.9887 10.9767 11.8874 11.023 11.7707 11.029C11.654 11.0357 11.5464 10.9893 11.4477 10.89C11.349 10.7907 11.2997 10.6863 11.2997 10.577C11.2997 10.467 11.349 10.3623 11.4477 10.263L14.5037 7.20801C14.8137 6.89734 14.9687 6.52868 14.9687 6.10201C14.9687 5.67534 14.8137 5.30667 14.5037 4.99601L13.4477 3.94001C13.3617 3.85468 13.3157 3.75368 13.3097 3.63701C13.303 3.52034 13.349 3.41234 13.4477 3.31301ZM19.6777 14.198C19.5797 14.2967 19.4754 14.346 19.3647 14.346C19.2547 14.346 19.1504 14.2967 19.0517 14.198L18.5727 13.719C18.1987 13.345 17.7467 13.158 17.2167 13.158C16.6867 13.158 16.235 13.345 15.8617 13.719L15.3817 14.199C15.2964 14.2843 15.1954 14.3303 15.0787 14.337C14.962 14.3437 14.8544 14.2973 14.7557 14.198C14.657 14.0987 14.6077 13.9943 14.6077 13.885C14.6077 13.7743 14.657 13.6697 14.7557 13.571L15.2347 13.092C15.7807 12.546 16.4414 12.273 17.2167 12.273C17.9927 12.273 18.6537 12.5463 19.1997 13.093L19.6787 13.571C19.7647 13.657 19.8107 13.7583 19.8167 13.875C19.8234 13.9917 19.7774 14.0993 19.6787 14.198H19.6777Z" fill="#007AFF" />
        </svg>
        <div className='text-[8px] text-center sm:text-[14px] font-SFPRODISPLAYREGULAR'>  Exciting News : Introducing New services and offers! <span className='text-sky-600 underline '>Tap here</span>  to know more!</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4.16171 18.73L6.93671 11.02C7.00671 10.8413 7.11005 10.7063 7.24671 10.615C7.38338 10.5243 7.53238 10.479 7.69371 10.479C7.80171 10.479 76.90105 10.4943 7.99171 10.525C8.08305 10.5557 8.17238 10.6147 8.25971 10.702L13.2397 15.682C13.327 15.7693 13.386 15.8587 13.4167 15.95C13.4474 16.0413 13.4627 16.1407 13.4627 16.248C13.4627 16.4093 13.4174 16.5583 13.3267 16.695C13.2354 16.8317 13.1007 16.935 12.9227 17.005L5.21171 19.781C5.04971 19.8383 4.89305 19.8477 4.74171 19.809C4.59038 19.7697 4.46105 19.6963 4.35371 19.589C4.24571 19.481 4.17238 19.3513 4.13371 19.2C4.09505 19.0487 4.10438 18.892 4.16171 18.73ZM21.6597 7.52601C21.573 7.62468 21.4717 7.67401 21.3557 7.67401C21.2397 7.67401 21.1384 7.63101 21.0517 7.54501L20.9957 7.48901C20.6857 7.17901 20.317 7.02401 19.8897 7.02401C19.463 7.02401 19.0947 7.17901 18.7847 7.48901L13.7287 12.545C13.6427 12.6317 13.5414 12.678 13.4247 12.684C13.308 12.6907 13.2004 12.6443 13.1017 12.545C13.003 12.4457 12.9537 12.3413 12.9537 12.232C12.9537 12.1213 13.003 12.0167 13.1017 11.918L18.1577 6.86301C18.627 6.39368 19.198 6.15901 19.8707 6.15901C20.544 6.15901 21.1154 6.39368 21.5847 6.86301L21.6597 6.93801C21.745 7.02334 21.7877 7.12134 21.7877 7.23201C21.7877 7.34201 21.745 7.44001 21.6597 7.52601ZM9.78271 4.77501C9.88138 4.67634 9.98571 4.62701 10.0957 4.62701C10.2064 4.62701 10.311 4.67634 10.4097 4.77501L10.7077 5.07301C11.241 5.60634 11.5077 6.25268 11.5077 7.01201C11.5077 7.77068 11.241 8.41668 10.7077 8.95001L10.4207 9.23701C10.3347 9.32234 10.2334 9.36834 10.1167 9.37501C10 9.38168 9.89238 9.33568 9.79371 9.23701C9.69505 9.13834 9.64571 9.03368 9.64571 8.92301C9.64571 8.81301 9.69505 8.70867 9.79371 8.61001L10.0807 8.32301C10.442 7.96168 10.6227 7.52468 10.6227 7.01201C10.6227 6.49868 10.442 6.06134 10.0807 5.70001L9.78271 5.40201C9.69605 5.31601 9.64971 5.21468 9.64371 5.09801C9.63705 4.98134 9.68338 4.87368 9.78271 4.77501ZM13.4477 3.31301C13.5464 3.21434 13.651 3.16501 13.7617 3.16501C13.8717 3.16501 13.976 3.21434 14.0747 3.31301L15.1307 4.36901C15.6127 4.85101 15.8537 5.42868 15.8537 6.10201C15.8537 6.77534 15.6127 7.35301 15.1307 7.83501L12.0747 10.89C11.9887 10.9767 11.8874 11.023 11.7707 11.029C11.654 11.0357 11.5464 10.9893 11.4477 10.89C11.349 10.7907 11.2997 10.6863 11.2997 10.577C11.2997 10.467 11.349 10.3623 11.4477 10.263L14.5037 7.20801C14.8137 6.89734 14.9687 6.52868 14.9687 6.10201C14.9687 5.67534 14.8137 5.30667 14.5037 4.99601L13.4477 3.94001C13.3617 3.85468 13.3157 3.75368 13.3097 3.63701C13.303 3.52034 13.349 3.41234 13.4477 3.31301ZM19.6777 14.198C19.5797 14.2967 19.4754 14.346 19.3647 14.346C19.2547 14.346 19.1504 14.2967 19.0517 14.198L18.5727 13.719C18.1987 13.345 17.7467 13.158 17.2167 13.158C16.6867 13.158 16.235 13.345 15.8617 13.719L15.3817 14.199C15.2964 14.2843 15.1954 14.3303 15.0787 14.337C14.962 14.3437 14.8544 14.2973 14.7557 14.198C14.657 14.0987 14.6077 13.9943 14.6077 13.885C14.6077 13.7743 14.657 13.6697 14.7557 13.571L15.2347 13.092C15.7807 12.546 16.4414 12.273 17.2167 12.273C17.9927 12.273 18.6537 12.5463 19.1997 13.093L19.6787 13.571C19.7647 13.657 19.8107 13.7583 19.8167 13.875C19.8234 13.9917 19.7774 14.0993 19.6787 14.198H19.6777Z" fill="#007AFF" />
        </svg>
      </div>
			<Header />
			<Outlet />
			<Footer />
		</main>
	);
};

export default MainLayout;
