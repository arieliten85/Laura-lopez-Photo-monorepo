import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import "./categorySection.css";
import { Link } from "react-router-dom";
import { CategoryImageSection } from "../../apis/ImagesCategorySection";
import React from "react";

export const CategorySection: React.FC = () => {
  return (
    <div className="category-section" data-test="gallery-container">
      <Grid container spacing={1} className="category-section__grid">
        {CategoryImageSection.map((category, index) => (
          <Grid
            item
            xs={12}
            sm={4}
            key={category.path}
            data-test={`category-item-${index}`}
          >
            <Link
              to={category.path.toLowerCase()}
              data-test={`category-link-${index}`}
            >
              <Card
                className="category-section__card"
                data-test={`category-card-${index}`}
              >
                <CardMedia
                  className="category-section__media"
                  component="img"
                  image={category.image}
                  alt={category.title}
                  sx={{
                    objectFit: "cover",
                    width: "100%",
                  }}
                  data-test={`category-media-${index}`}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    className="category-section__title"
                    data-test={`category-title-${index}`}
                  >
                    {category.title}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
