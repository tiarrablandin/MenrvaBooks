package entities;

import org.hibernate.Hibernate;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String cover;

    private String title;

    @Column(name="series_name")
    private String seriesName;

    @Column(name="series_number")
    private int seriesNumber;

    private String description;

    @Column(name="age_category")
    private String ageCategory;

    private String language;

    @Column(name="page_count")
    private int pageCount;

    @Column(name="publication_date")
    private int publicationDate;

    @CreationTimestamp
    @Column(name="date_added")
    private int dateAdded;

    @UpdateTimestamp
    @Column(name="date_updated")
    private int dateUpdated;




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Book book = (Book) o;
        return false;
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
