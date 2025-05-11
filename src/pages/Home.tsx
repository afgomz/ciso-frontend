import React, { useEffect } from "react";
import { UsersIcon } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Routes } from "@/config/routes";

/**
 * Home page component.
 * Redirects authenticated users to the dashboard.
 */
export const Home: React.FC = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  // Redirect authenticated users to dashboard
  useEffect(() => {
    if (isAuthenticated) {
      navigate(Routes.DASHBOARD, { replace: true });
    }
  }, [isAuthenticated, navigate]);

  // Handle "Entrar" button click
  const handleEntrar = () => {
    if (isAuthenticated) {
      navigate(Routes.DASHBOARD, { replace: true });
    } else {
      loginWithRedirect({ appState: { returnTo: Routes.DASHBOARD } });
    }
  };

  return (
    <main className="bg-white flex justify-center w-full min-h-screen">
      <div className="w-full max-w-[1440px] h-[1024px] relative border border-black">
        <section className="relative mx-auto px-9 w-full max-w-[1183px] h-[796px]">
          {/* CISO Logo */}
          <img
            src="https://c.animaapp.com/ImE0hJQv/img/ciso-logo-4-1@2x.png"
            alt="CISO company logo"
            className="absolute top-0 left-0 w-64 h-[242px] object-cover"
          />

          {/* Entrar Button */}
          <Button
            onClick={handleEntrar}
            className="absolute top-[70px] right-0 flex items-center gap-2 bg-[#1c2837] text-white border border-solid border-color-border-brand-default cursor-pointer"
          >
            <UsersIcon className="w-4 h-4" />
            <span className="font-single-line-body-base text-color-text-brand-on-brand">
              Entrar
            </span>
          </Button>

          {/* Headline */}
          <div className="absolute top-[241px] left-12 w-[544px] text-[40px] font-normal leading-normal tracking-normal">
            <h1 className="[font-family:'Alfa_Slab_One',Helvetica]">
              <span className="text-[#1c2837]">
                Tu aliado estratégico para alcanzar el cumplimiento y la
                excelencia en{" "}
              </span>
              <span className="text-[#3e587b]">
                estándares internacionales.
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="absolute top-[540px] left-12 w-[544px] [font-family:'Andada_Pro',Helvetica] text-2xl text-[#1c2837] font-normal leading-normal tracking-normal">
            CISO optimiza el cumplimiento normativo mediante auditorías,
            reportes dinámicos y herramientas de mejora continua, impulsando
            decisiones basadas en datos con eficiencia y seguridad.
          </p>

          {/* Geometric Art */}
          <img
            src="https://c.animaapp.com/ImE0hJQv/img/geometric-art-1.png"
            alt="Geometric abstract art"
            className="absolute top-[175px] right-0 w-[621px] h-[621px] object-cover"
          />
        </section>
      </div>
    </main>
  );
};