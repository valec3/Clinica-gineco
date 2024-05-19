import { Outlet } from 'react-router-dom';
const AuthLayout = () => {
    return (
        <section className="w-full h-full grid grid-cols-2 ">
            <div className="flex justify-center items-center">
                <div className="w-full md:max-w-[450px]">
                    <Outlet />
                </div>
            </div>
            <div className="hidden lg:block overflow-hidden">
                <img
                    src="https://previews.123rf.com/images/nadiinko/nadiinko1708/nadiinko170800149/83951432-m%C3%A9dico-patr%C3%B3n-transparente-ginecolog%C3%ADa-vector-de-fondo-de-color-rosa-obstetricia-l%C3%ADnea-de.jpg"
                    alt="fondo de ginecología"
                    className="object-cover w-full h-full "
                />
            </div>
        </section>
    );
};

export default AuthLayout;
