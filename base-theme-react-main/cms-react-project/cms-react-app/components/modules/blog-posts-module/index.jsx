export const Component = ({ fieldValues, hublData, hublParameters = {} }) => {
    const blogPosts = hublData.blog_posts

    return (
        <section className="base-wrapper relative pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] px-[20px] md:px-[40px]">
            <div className="mx-auto z-10 relative max-w-[1440px] grid gap-14 grid-cols-3">
                {hublData.map((item, index) => (
                    <a className="blog-post" href={item.absoluteUrl}>
                        <img src={item.featuredImage} width="450px" height="250px" />
                        <h3>{item.name}</h3>
                        <div dangerouslySetInnerHTML={{ __html: item.postListContent }} />
                    </a>
                ))}
            </div>
        </section>
    );
}

// Re-export the fields from fields.jsx
export { fields } from './fields.jsx';

// Export the metadata
export const meta = {
    label: `Blog posts`,
    host_template_types: ['PAGE','BLOG_LISTING'],
    categories: ['blog'],
}

export const hublDataTemplate = `
    {% set recent_posts = blog_recent_posts(module.blog_field, 3) %}
    {% set hublData = [] %}
    
    {% for content in recent_posts %}

      {% set tagList = [] %}
      {% for tag in content.tag_list %}
        {% do tagList.append({
            "name": tag.name,
            "slug": tag.slug,
          })
        %}
      {% endfor %}
    
      {% set blogPost = {
          "id": content.id,
          "name": content.name,
          "parentBlog": {
            "absoluteUrl": content.parent_blog.absolute_url
          },
          "blogAuthor": {
            "displayName": content.blog_author.display_name,
            "avatar": resize_image_url( content.blog_author.avatar, 100, 0, 100 ),
            "slug": content.blog_author.slug
          },
          "featuredImage": content.featured_image,
          "featuredImageHeight": content.featured_image_height,
          "featuredImageWidth": content.featured_image_width,
          "absoluteUrl": content.absolute_url,
          "featuredImageAltText": content.featured_image_alt_text,
          "tagList": tagList,
          "publishDate": content.publish_date,
          "publishDateLocalized": content.publish_date_localized,
          "postListContent": content.post_list_content|striptags
        }
      %}

      {% do hublData.append(blogPost) %}

    {% endfor %}
`