// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Profile → Software*
 */
export interface ProfileDocumentDataSoftwareItem {
  /**
   * SVG field in *Profile → Software*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: profile.software[].svg
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  svg: prismic.KeyTextField;
}

/**
 * Item in *Profile → Languages*
 */
export interface ProfileDocumentDataLanguagesItem {
  /**
   * SVG field in *Profile → Languages*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: profile.languages[].svg
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  svg: prismic.KeyTextField;
}

/**
 * Item in *Profile → Clients*
 */
export interface ProfileDocumentDataClientsItem {
  /**
   * SVG field in *Profile → Clients*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: profile.clients[].svg
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  svg: prismic.KeyTextField;
}

type ProfileDocumentDataSlicesSlice = never;

/**
 * Content for Profile documents
 */
interface ProfileDocumentData {
  /**
   * About field in *Profile*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: profile.about
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  about: prismic.RichTextField;

  /**
   * Curriculum Link field in *Profile*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: profile.curriculum_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  curriculum_link: prismic.LinkToMediaField;

  /**
   * Creative field in *Profile*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: profile.creative
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  creative: prismic.RichTextField;

  /**
   * Digital field in *Profile*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: profile.digital
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  digital: prismic.RichTextField;

  /**
   * Development field in *Profile*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: profile.development
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  development: prismic.RichTextField;

  /**
   * Software field in *Profile*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: profile.software[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  software: prismic.GroupField<Simplify<ProfileDocumentDataSoftwareItem>>;

  /**
   * Languages field in *Profile*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: profile.languages[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  languages: prismic.GroupField<Simplify<ProfileDocumentDataLanguagesItem>>;

  /**
   * Clients field in *Profile*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: profile.clients[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  clients: prismic.GroupField<Simplify<ProfileDocumentDataClientsItem>>;

  /**
   * Slice Zone field in *Profile*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: profile.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProfileDocumentDataSlicesSlice> /**
   * Meta Description field in *Profile*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: profile.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Profile*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: profile.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Profile*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: profile.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Profile document from Prismic
 *
 * - **API ID**: `profile`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProfileDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ProfileDocumentData>,
    "profile",
    Lang
  >;

/**
 * Item in *Project → Services*
 */
export interface ProjectDocumentDataServicesItem {
  /**
   * Service field in *Project → Services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Service
   * - **API ID Path**: project.services[].service
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  service: prismic.KeyTextField;
}

type ProjectDocumentDataSlicesSlice = never;

type ProjectDocumentDataBodySlice =
  | VideoPlayerSlice
  | RichTextSlice
  | ParallaxImgSlice
  | IntroCopySlice
  | ImageGallerySlice
  | ColorPalleteSlice;

/**
 * Content for Project documents
 */
interface ProjectDocumentData {
  /**
   * agency field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Agency
   * - **API ID Path**: project.agency
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  agency: prismic.KeyTextField;

  /**
   * Client field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Client
   * - **API ID Path**: project.client
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  client: prismic.KeyTextField;

  /**
   * hero field in *Project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.hero
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero: prismic.ImageField<"square">;

  /**
   * Services field in *Project*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: project.services[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  services: prismic.GroupField<Simplify<ProjectDocumentDataServicesItem>>;

  /**
   * Slice Zone field in *Project*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: project.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectDocumentDataSlicesSlice> /**
   * Slice Zone field in *Project*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: project.body[]
   * - **Tab**: Sections
   * - **Documentation**: https://prismic.io/docs/field#slices
   */;
  body: prismic.SliceZone<ProjectDocumentDataBodySlice> /**
   * Meta Title field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.meta_title
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Meta Description
   * - **API ID Path**: project.meta_description
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Keywords field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Meta Keywords
   * - **API ID Path**: project.meta_keywords
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_keywords: prismic.KeyTextField;

  /**
   * Meta Image field in *Project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.meta_image
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectDocumentData>,
    "project",
    Lang
  >;

/**
 * Item in *Settings → Social Media*
 */
export interface SettingsDocumentDataSocialMediaItem {
  /**
   * Name field in *Settings → Social Media*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.social_media[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Link field in *Settings → Social Media*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.social_media[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Phone field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.phone
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  phone: prismic.KeyTextField;

  /**
   * Email field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.email
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField;

  /**
   * Location field in *Settings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.location
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  location: prismic.RichTextField;

  /**
   * Social Media field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.social_media[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  social_media: prismic.GroupField<
    Simplify<SettingsDocumentDataSocialMediaItem>
  >;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | ProfileDocument
  | ProjectDocument
  | SettingsDocument;

/**
 * Primary content in *ColorPallete → Primary*
 */
export interface ColorPalleteSliceDefaultPrimary {
  /**
   * Intro field in *ColorPallete → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: color_pallete.primary.intro
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  intro: prismic.RichTextField;
}

/**
 * Primary content in *ColorPallete → Items*
 */
export interface ColorPalleteSliceDefaultItem {
  /**
   * Pantone field in *ColorPallete → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: color_pallete.items[].pantone
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  pantone: prismic.KeyTextField;

  /**
   * CMYK field in *ColorPallete → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: color_pallete.items[].cmyk
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cmyk: prismic.KeyTextField;

  /**
   * RGB field in *ColorPallete → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: color_pallete.items[].rgb
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  rgb: prismic.KeyTextField;

  /**
   * HEX field in *ColorPallete → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: color_pallete.items[].hex
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  hex: prismic.KeyTextField;
}

/**
 * Default variation for ColorPallete Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ColorPalleteSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ColorPalleteSliceDefaultPrimary>,
  Simplify<ColorPalleteSliceDefaultItem>
>;

/**
 * Slice variation for *ColorPallete*
 */
type ColorPalleteSliceVariation = ColorPalleteSliceDefault;

/**
 * ColorPallete Shared Slice
 *
 * - **API ID**: `color_pallete`
 * - **Description**: ColorPallete
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ColorPalleteSlice = prismic.SharedSlice<
  "color_pallete",
  ColorPalleteSliceVariation
>;

/**
 * Primary content in *ImageGallery → Items*
 */
export interface ImageGallerySliceDefaultItem {
  /**
   * Image field in *ImageGallery → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_gallery.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for ImageGallery Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageGallerySliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<ImageGallerySliceDefaultItem>
>;

/**
 * Slice variation for *ImageGallery*
 */
type ImageGallerySliceVariation = ImageGallerySliceDefault;

/**
 * ImageGallery Shared Slice
 *
 * - **API ID**: `image_gallery`
 * - **Description**: ImageGallery
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageGallerySlice = prismic.SharedSlice<
  "image_gallery",
  ImageGallerySliceVariation
>;

/**
 * Primary content in *IntroCopy → Primary*
 */
export interface IntroCopySliceDefaultPrimary {
  /**
   * Title field in *IntroCopy → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: intro_copy.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Copy field in *IntroCopy → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: intro_copy.primary.copy
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  copy: prismic.RichTextField;
}

/**
 * Default variation for IntroCopy Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IntroCopySliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<IntroCopySliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *IntroCopy*
 */
type IntroCopySliceVariation = IntroCopySliceDefault;

/**
 * IntroCopy Shared Slice
 *
 * - **API ID**: `intro_copy`
 * - **Description**: IntroCopy
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IntroCopySlice = prismic.SharedSlice<
  "intro_copy",
  IntroCopySliceVariation
>;

/**
 * Primary content in *ParallaxImg → Primary*
 */
export interface ParallaxImgSliceDefaultPrimary {
  /**
   * Image field in *ParallaxImg → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: parallax_img.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for ParallaxImg Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ParallaxImgSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ParallaxImgSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ParallaxImg*
 */
type ParallaxImgSliceVariation = ParallaxImgSliceDefault;

/**
 * ParallaxImg Shared Slice
 *
 * - **API ID**: `parallax_img`
 * - **Description**: ParallaxImg
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ParallaxImgSlice = prismic.SharedSlice<
  "parallax_img",
  ParallaxImgSliceVariation
>;

/**
 * Primary content in *RichText → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: rich_text.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

/**
 * Primary content in *VideoPlayer → Primary*
 */
export interface VideoPlayerSliceDefaultPrimary {
  /**
   * Display Controls field in *VideoPlayer → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: video_player.primary.controls
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  controls: prismic.BooleanField;

  /**
   * Loop field in *VideoPlayer → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: video_player.primary.loop
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  loop: prismic.BooleanField;

  /**
   * Vimeo ID field in *VideoPlayer → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: video_player.primary.vimeo_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  vimeo_id: prismic.KeyTextField;
}

/**
 * Default variation for VideoPlayer Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoPlayerSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<VideoPlayerSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *VideoPlayer*
 */
type VideoPlayerSliceVariation = VideoPlayerSliceDefault;

/**
 * VideoPlayer Shared Slice
 *
 * - **API ID**: `video_player`
 * - **Description**: VideoPlayer
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoPlayerSlice = prismic.SharedSlice<
  "video_player",
  VideoPlayerSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ProfileDocument,
      ProfileDocumentData,
      ProfileDocumentDataSoftwareItem,
      ProfileDocumentDataLanguagesItem,
      ProfileDocumentDataClientsItem,
      ProfileDocumentDataSlicesSlice,
      ProjectDocument,
      ProjectDocumentData,
      ProjectDocumentDataServicesItem,
      ProjectDocumentDataSlicesSlice,
      ProjectDocumentDataBodySlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataSocialMediaItem,
      AllDocumentTypes,
      ColorPalleteSlice,
      ColorPalleteSliceDefaultPrimary,
      ColorPalleteSliceDefaultItem,
      ColorPalleteSliceVariation,
      ColorPalleteSliceDefault,
      ImageGallerySlice,
      ImageGallerySliceDefaultItem,
      ImageGallerySliceVariation,
      ImageGallerySliceDefault,
      IntroCopySlice,
      IntroCopySliceDefaultPrimary,
      IntroCopySliceVariation,
      IntroCopySliceDefault,
      ParallaxImgSlice,
      ParallaxImgSliceDefaultPrimary,
      ParallaxImgSliceVariation,
      ParallaxImgSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
      VideoPlayerSlice,
      VideoPlayerSliceDefaultPrimary,
      VideoPlayerSliceVariation,
      VideoPlayerSliceDefault,
    };
  }
}
