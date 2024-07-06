import './_section-settings.scss';

interface SectionSettingsProps {
    onCreateCurse: () => void;
}

export const SectionSettings = ( { onCreateCurse }: SectionSettingsProps ) => {

    return (
        <div className='sectionSettings'>

            <h1>Configuraciones</h1>

            <div className='sectionSettings__buttons'>

                <button type='button' onClick={ onCreateCurse }>
                    Crear curso
                </button>

                <button type='button'>
                    Cancelar
                </button>

            </div>

        </div>
    );

}
