package org.macrofoods.backend.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class IngredientGroupDescription {
	@Id
	private Integer id;
	@ManyToOne(optional = false)
	private IngredientGroup group;
	@Column(length = 60)
	private String title;
	@Enumerated(EnumType.STRING)
	private LangCode langCode;

	public IngredientGroupDescription() {
	}

}
