import {IEnhancement, BEAllProps} from '../trans-render/be/types';

/**
 * 
 */
export interface DirectoryPickerOptions {
    /**
     * By specifying an ID, the browser can remember different directories for different IDs. If the same ID is used for another picker, the picker opens in the same directory.
     */
    id?: string;

    /**
     * A string that defaults to "read" for read-only access or "readwrite" for read and write access to the directory.
     */
    mode?: 'read' | 'readwrite';

    /**
     * A FileSystemHandle or a well known directory ("desktop", "documents", "downloads", "music", "pictures", or "videos") to open the dialog in.
     * 
     */
    startIn?: 'documents' | 'downloads' | 'music' | 'pictures' | 'videos' | 'home' | 'desktop' | File;
}
export interface EndUserProps extends IEnhancement{
    options: DirectoryPickerOptions;
    noNudge: boolean;
}

export interface AllProps extends EndUserProps{
    directoryHandle?: FileSystemDirectoryHandle;
}

export type AP = AllProps;

export type PAP = Partial<AP>;

export type ProPAP = Promise<PAP>;

export type BAP = AP & BEAllProps;

export interface Actions{
    hydrate(self: BAP): ProPAP;
}

