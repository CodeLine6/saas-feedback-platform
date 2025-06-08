import AuthProvider from "@/components/layout/AuthProvider";

const Providers = ({ children } : {children: React.ReactNode}) => {
    return (<AuthProvider>
                {children}
                </AuthProvider>)
}

export default Providers