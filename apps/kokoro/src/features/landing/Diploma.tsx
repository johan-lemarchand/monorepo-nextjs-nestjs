"use client";

import { Typography } from "@repo/ui/components/ui/typography";
import { SectionLayout } from "@repo/ui/layouts/SectionLayout";
import { PiCertificateBold } from "@repo/ui/icons";
import { EditableText } from "@repo/ui/components/editable/EditableText";
import { EditableDrawer } from "@repo/ui/components/editable/EditableDrawer";
import { useSession } from "@repo/ui/hooks/useSession";
import { useEditableContentManager } from "@repo/ui/hooks/useEditableContentManager";

export const DiplomaSection = () => {
  const { data: session } = useSession();
  const isEditable = !!session;

  const contentIds = [
    "diploma-title",
    "diploma-description",
    "diploma-subtitle",
    ...diplomaList.map(item => `diploma-item-${item.no}`)
  ];

  const {
    isDrawerOpen,
    setIsDrawerOpen,
    drawerContent,
    drawerType,
    handleOpenDrawer,
    handleSave,
  } = useEditableContentManager(contentIds);

  const noop = () => {};

  return (
    <SectionLayout
      variant="card"
      size="base"
      className="relative flex flex-col items-center justify-center gap-8 overflow-hidden py-16"
      backgroundImage="/images/IMG_3695.webp"
    >
      <div className="relative w-full max-w-4xl">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
        <Typography
          as="div"
          className="relative z-10 my-6 text-center text-4xl font-bold text-white drop-shadow-sm"
        >
          <EditableText
            initialText="Qui suis-je ?"
            contentId="diploma-title"
            variant="h3"
            onEdit={
              isEditable
                ? (contentId: string) =>
                    handleOpenDrawer("text", contentId, "Qui suis-je ?")
                : noop
            }
          />
        </Typography>
        <div className="relative z-10 m-8 text-center text-lg text-white drop-shadow-sm">
          <EditableText
            initialText="Louise, éducatrice de jeunes enfants et médiatrice animale passionnée ! 🌟 Depuis toujours, les animaux occupent une place spéciale dans ma vie, ayant grandi entourée de leur bienveillance. C'est cette connexion unique entre l'homme et l'animal, et les incroyables bienfaits qu'elle apporte, qui m'ont inspiré à exercer en tant qu'intervenante en médiation par l'animal. Après plusieurs années d'expérience dans la relation d'aide, inclure l'animal a été pour moi une évidence!"
            contentId="diploma-description"
            variant="p"
            renderHTML={true}
            className="relative z-10 m-8 text-center text-lg text-white drop-shadow-sm"
            onEdit={
              isEditable
                ? (contentId: string) =>
                    handleOpenDrawer(
                      "text",
                      contentId,
                      "Louise, éducatrice de jeunes enfants et médiatrice animale passionnée ! 🌟 Depuis toujours, les animaux occupent une place spéciale dans ma vie, ayant grandi entourée de leur bienveillance. C'est cette connexion unique entre l'homme et l'animal, et les incroyables bienfaits qu'elle apporte, qui m'ont inspiré à exercer en tant qu'intervenante en médiation par l'animal. Après plusieurs années d'expérience dans la relation d'aide, inclure l'animal a été pour moi une évidence!",
                    )
                : noop
            }
          />
        </div>
      </div>

      <div className="w-full max-w-4xl">
        <Typography
          as="div"
          className="mb-8 text-center text-3xl font-bold"
        >
          <EditableText
            initialText="Mes diplômes"
            contentId="diploma-subtitle"
            variant="h3"
            onEdit={
              isEditable
                ? (contentId: string) =>
                    handleOpenDrawer("text", contentId, "Mes diplômes")
                : noop
            }
          />
        </Typography>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {diplomaList.map((item) => (
            <div
              key={item.no}
              className="flex items-center space-x-4 rounded-lg bg-white p-4 shadow-md"
            >
              <div className="shrink-0">
                <span className="flex size-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  <PiCertificateBold className="text-xl" />
                </span>
              </div>
              <div className="grow">
                <EditableText
                  initialText={item.text}
                  contentId={`diploma-item-${item.no}`}
                  variant="p"
                  onEdit={
                    isEditable
                      ? (contentId: string) =>
                          handleOpenDrawer("text", contentId, item.text)
                      : noop
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <EditableDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        content={drawerContent}
        onSave={handleSave}
        type={drawerType}
      />
    </SectionLayout>
  );
};

const diplomaList = [
  {
    no: "1",
    text: "Educatrice de Jeunes Enfants",
  },
  {
    no: "2",
    text: "ACACED (Attestation de Connaissances pour les Animaux de Compagnie d'Espèces Domestiques)",
  },
  {
    no: "3",
    text: "Formation Chargé de Projet en Médiation par l'Animal – Institut de formation AGATEA",
  },
  {
    no: "4",
    text: "PECCRAM (Programme d'Education à la Connaissance du Chien et au Risque d'Accident par Morsure)",
  },
];
