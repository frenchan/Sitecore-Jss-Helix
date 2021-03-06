// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-manifest';
/**
 * Adds the Video component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
    export default function(manifest) {
        const section = "Video Setting";

    manifest.addComponent({
        name: 'Youtube',
        icon: 'People/32x32/movie_run.png',
        fields: [
            { name: 'videoId', displayName: 'Video Id', type: CommonFieldTypes.SingleLineText, section: section },
            { name: 'videoHeight', displayName: 'Video Height', type: CommonFieldTypes.SingleLineText, section: section },
            { name: 'videoWidth', displayName: 'Video Width', type: CommonFieldTypes.SingleLineText, section: section },
            { name: 'videoControls', displayName: 'Video Controls', type: CommonFieldTypes.SingleLineText, section: section },
        ],
    });
}
